import { TurboModule, TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
    toggleOn(): void
    toggleOff(): void
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeTorch');
