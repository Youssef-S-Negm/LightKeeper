import { TurboModule, TurboModuleRegistry } from 'react-native';

export interface Spec extends TurboModule {
    startListening(): void
    stopListening(): void
}

export default TurboModuleRegistry.getEnforcing<Spec>('NativeLightSensor');
