import DeviceInfo from 'react-native-device-info';

export const getNativeDeviceDetails = () => {
    let deviceOS = DeviceInfo.getBaseOs();
    let deviceBrand = DeviceInfo.getBrand();
    let device = DeviceInfo.getDevice();
    let deviceName = DeviceInfo.getDeviceName();
    let deviceId = DeviceInfo.getDeviceId();
    let deviceOSVersion = DeviceInfo.getVersion();
    let ipAdd = DeviceInfo.getIpAddress();
    let model = DeviceInfo.getModel();
    
    return {
        name: device,
        deviceId: deviceId,
        deviceName: deviceName,
        brand: deviceBrand,
        os: deviceOS,
        osVersion: deviceOSVersion,
        ipAdd: ipAdd,
        model: model,
    };
};