import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'chatapp.ionic.com',
  appName: 'client',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
