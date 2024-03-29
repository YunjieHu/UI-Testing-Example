import wd from 'wd';

jasmine.DEFAULT_TIMEOUT_INTERVAL = 60000;
const PORT = 4723;
const config = {
  platformName: 'Android',
  deviceName: 'Android18',
};
const driver = wd.promiseChainRemote('localhost', PORT);

beforeAll(async () => {
  await driver.init(config);
  await driver.sleep(2000); // wait for app to load
})

test('appium renders', async () => {
  expect(await driver.hasElementByAccessibilityId('testview')).toBe(true);
  const element = await driver.elementByAccessibilityId('testview')
  await element.click()
  expect(await driver.hasElementByAccessibilityId('notthere')).toBe(false);
});