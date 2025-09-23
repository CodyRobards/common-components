global.mockSetFormValue = jest.fn();

if (!HTMLElement.prototype.attachInternals) {
  Object.defineProperty(HTMLElement.prototype, "attachInternals", {
    value: function () {
      return {
        setFormValue: global.mockSetFormValue,
      };
    },
    configurable: true,
  });
}
