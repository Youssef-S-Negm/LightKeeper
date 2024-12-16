package com.lightkeeper.nativemodule

import android.content.Context
import android.hardware.Sensor
import android.hardware.SensorEvent
import android.hardware.SensorEventListener
import android.hardware.SensorManager
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.modules.core.DeviceEventManagerModule

class NativeLightSensorModule(reactContext: ReactApplicationContext) :
    NativeLightSensorSpec(reactContext), SensorEventListener {
    private val sensorManager =
        reactContext.getSystemService(Context.SENSOR_SERVICE) as SensorManager
    private val lightSensor: Sensor? = sensorManager.getDefaultSensor(Sensor.TYPE_LIGHT)

    override fun getName(): String {
        return NAME
    }

    override fun startListening() {
        sensorManager.registerListener(this, lightSensor, SensorManager.SENSOR_DELAY_NORMAL)
    }

    override fun stopListening() {
        sensorManager.unregisterListener(this)
    }

    override fun onSensorChanged(p0: SensorEvent?) {
        val lightIntensity = p0?.values?.get(0)
        if (lightIntensity != null) {
            reactApplicationContext
                .getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter::class.java)
                .emit("lightIntensityChanged", lightIntensity)
        }
    }

    override fun onAccuracyChanged(p0: Sensor?, p1: Int) {
    }

    companion object {
        const val NAME = "NativeLightSensor"
    }
}