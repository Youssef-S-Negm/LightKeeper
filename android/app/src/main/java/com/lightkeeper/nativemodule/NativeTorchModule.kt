package com.lightkeeper.nativemodule

import android.content.Context
import android.hardware.camera2.CameraAccessException
import android.hardware.camera2.CameraManager
import android.util.Log
import com.facebook.react.bridge.ReactApplicationContext

class NativeTorchModule(reactContext: ReactApplicationContext) : NativeTorchSpec(reactContext) {
    private var cameraManager: CameraManager =
        reactContext.getSystemService(Context.CAMERA_SERVICE) as CameraManager
    private lateinit var cameraId: String

    override fun getName(): String {
        return NAME
    }

    override fun toggleOn() {
        try {
            cameraManager.setTorchMode(cameraId, true)
        } catch (e: CameraAccessException) {
            Log.e("NativeTorchModule", "Error turning on torch", e)
        }
    }

    override fun toggleOff() {
        try {
            cameraManager.setTorchMode(cameraId, false)
        } catch (e: CameraAccessException) {
            Log.e("NativeTorchModule", "Error turning off torch", e)
        }
    }

    init {
        try {
            cameraId = cameraManager.cameraIdList[0]
        } catch (e: CameraAccessException) {
            Log.e("NativeTorchModule", "Error getting camera ID", e)
        }
    }

    companion object {
        const val NAME = "NativeTorch"
    }
}