package com.lightkeeper.nativemodule

import com.facebook.react.TurboReactPackage
import com.facebook.react.bridge.NativeModule
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.module.model.ReactModuleInfo
import com.facebook.react.module.model.ReactModuleInfoProvider

class NativeTorchPackage : TurboReactPackage() {
    override fun getModule(p0: String, p1: ReactApplicationContext): NativeModule? {
        return if (p0 == NativeTorchModule.NAME) NativeTorchModule(p1)
        else null
    }

    override fun getReactModuleInfoProvider(): ReactModuleInfoProvider {
        return ReactModuleInfoProvider {
            mapOf(
                NativeTorchModule.NAME to ReactModuleInfo(
                    isTurboModule = true,
                    isCxxModule = false,
                    _name = NativeTorchModule.NAME,
                    _className = NativeTorchModule.NAME,
                    _needsEagerInit = false,
                    _canOverrideExistingModule = false
                )
            )
        }
    }
}