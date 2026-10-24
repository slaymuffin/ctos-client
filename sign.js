// Кастомная заглушка для electron-builder (пропуск платной подписи)
exports.default = async function () {
  return true;
};
