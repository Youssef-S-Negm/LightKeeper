package com.lightkeeper.nativemodule

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class NativeLightSensorPackage : TurboReactPackage() {
    override fun getModule(p0: String, p1: ReactApplicationContext): NativeModule? {
        return if (p0 == NativeLightSensorModule.NAME) NativeLightSensorModule(p1)
        else null
    }

    override fun getReactModuleInfoProvider(): ReactModuleInfoProvider {
        return ReactModuleInfoProvider {
            mapOf(
                NativeLightSensorModule.NAME to ReactModuleInfo(
                    isTurboModule = true,
                    isCxxModule = false,
                    _className = NativeLightSensorModule.NAME,
                    _name = NativeLightSensorModule.NAME,
                    _needsEagerInit = false,
                    _canOverrideExistingModule = false
                )
            )
        }
    }
}