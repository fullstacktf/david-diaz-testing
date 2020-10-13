const { format } = require("prettier");

function formatBytes(value) {
  let gigas = "0";
  let megas = "0";
  let teras = "0";
  if (value < 1000) {
    return value + "MB";
  } else if (value < 1000000) {
    megas = getMegas(value);
    gigas = getGigasAndTeras(value);
    checkMegasBiggerThanCero(megas);
    return gigas + "GB " + megas + "MB";
  } else if (value > 1000000) {
    megas = getMegas(value);
    gigas = getGigasAndTeras(value);
    teras = getGigasAndTeras(gigas);
    checkMegasBiggerThanCero(megas);
    return (
      teras +
      "TB " +
      gigas.substring(teras.length, gigas.length) +
      "GB " +
      megas +
      "MB"
    );
  }
}

const getMegas = (megaBytes) =>
  megaBytes.toString().substring(megaBytes.toString().length - 3);

const getGigasAndTeras = (megaBytes) => {
  const gigas = megaBytes
    .toString()
    .substring(0, megaBytes.toString().split("").length - 3);
  return gigas;
};

const checkMegasBiggerThanCero = (megas) => {
  if (megas === "000" || megas === "00") {
    megas = "0";
  }
  return megas;
};

module.exports = formatBytes;
