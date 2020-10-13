function formatBytes(value) {
  let gigas = "0";
  let megas = "0";
  let teras = "0";
  if (value < 1000) {
    return value + "MB";
  } else if (value < 1000000) {
    megas = getMegas(value);
    gigas = getGigasAndTeras(value);
    megas = checkTripleCeroValues(megas);
    return gigas + "GB " + megas + "MB";
  } else if (value > 1000000) {
    megas = getMegas(value);
    gigas = getGigasAndTeras(value);
    teras = getGigasAndTeras(gigas);
    megas = checkTripleCeroValues(megas);
    gigas = checkTripleCeroValues(gigas.substring(teras.length, gigas.length));

    return teras + "TB " + gigas + "GB " + megas + "MB";
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

const checkTripleCeroValues = (value) => {
  if (value === "000" || value === "00") {
    value = "0";
  }
  return value;
};

module.exports = formatBytes;
