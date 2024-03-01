/* eslint-disable etc/no-commented-out-code */
export const getNativeDeviceDetails = () => {
  let deviceOS = ""; // DeviceInfo.getBaseOs()
  let deviceBrand = ""; // DeviceInfo.getBrand()
  let device = ""; // DeviceInfo.getDevice()
  let deviceName = ""; // DeviceInfo.getDeviceName()
  let deviceId = ""; // DeviceInfo.getDeviceId()
  let deviceOSVersion = ""; // DeviceInfo.getVersion()
  let ipAdd = ""; // DeviceInfo.getIpAddress()
  let model = ""; // DeviceInfo.getModel()

  return {
    brand     : deviceBrand,
    deviceId  : deviceId,
    deviceName: deviceName,
    ipAdd     : ipAdd,
    model     : model,
    name      : device,
    os        : deviceOS,
    osVersion : deviceOSVersion,
  };
};
