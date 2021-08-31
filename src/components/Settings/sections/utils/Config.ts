const DEFAULT = {
  OVERALL_QUANTITY: { KEY: "OVERALL_QUANTITY", DEFAULT: 207 },
  OVERALL_ADDITION_RATIO: { KEY: "OVERALL_ADDITION_RATIO", DEFAULT: 0.6 },
  OVERALL_SUBTRACTION_RATIO: { KEY: "OVERALL_SUBTRACTION_RATIO", DEFAULT: 0.4 },

  ADDITION_MAX_LIMIT_OF_RESULT: {
    KEY: "ADDITION_MAX_LIMIT_OF_RESULT",
    DEFAULT: 20,
  },
  ADDITION_MIN_NUM: { KEY: "ADDITION_MIN_NUM", DEFAULT: 0 },
  ADDITION_MAX_NUM: { KEY: "ADDITION_MAX_NUM", DEFAULT: 20 },

  SUBTRACTION_MIN_LIMIT_OF_RESULT: {
    KEY: "SUBTRACTION_MIN_LIMIT_OF_RESULT",
    DEFAULT: 0,
  },
  SUBTRACTION_MAX_LIMIT_OF_RESULT: {
    KEY: "SUBTRACTION_MAX_LIMIT_OF_RESULT",
    DEFAULT: 20,
  },
  SUBTRACTION_MIN_NUM: { KEY: "SUBTRACTION_MIN_NUM", DEFAULT: 1 },
  SUBTRACTION_MAX_NUM: { KEY: "SUBTRACTION_MAX_NUM", DEFAULT: 20 },
} as const;

type DefaultType = typeof DEFAULT;

export class Config {
  static KEY = DEFAULT;

  public overall = {
    quantity: 0,
    additionRatio: 0,
    subtractionRatio: 0,
  };
  public addition = {
    maxLimitOfResult: 0,
    minNum: 99,
    maxNum: 999,
  };
  public subtraction = {
    minLimitOfResult: 0,
    maxLimitOfResult: 9999,
    minNum: 1,
    maxNum: 99,
  };

  constructor() {
    this.initialization();
  }

  initialization() {
    this.overall.quantity = this.getItem("OVERALL_QUANTITY");
    this.overall.additionRatio = this.getItem("OVERALL_ADDITION_RATIO");
    this.overall.subtractionRatio = this.getItem("OVERALL_SUBTRACTION_RATIO");

    this.addition.maxLimitOfResult = this.getItem(
      "ADDITION_MAX_LIMIT_OF_RESULT"
    );
    this.addition.minNum = this.getItem("ADDITION_MIN_NUM");
    this.addition.maxNum = this.getItem("ADDITION_MAX_NUM");

    this.subtraction.minLimitOfResult = this.getItem(
      "SUBTRACTION_MIN_LIMIT_OF_RESULT"
    );
    this.subtraction.maxLimitOfResult = this.getItem(
      "SUBTRACTION_MAX_LIMIT_OF_RESULT"
    );
    this.subtraction.minNum = this.getItem("SUBTRACTION_MIN_NUM");
    this.subtraction.maxNum = this.getItem("SUBTRACTION_MAX_NUM");
  }

  reset() {
    Object.entries(DEFAULT)
      .map((value) => value[1])
      .forEach(({ KEY, DEFAULT }) => {
        this.saveItem(KEY, DEFAULT);
      });
  }

  getItem(key: keyof DefaultType) {
    return Number(
      window.localStorage.getItem(DEFAULT[key].KEY) ?? DEFAULT[key].DEFAULT
    );
  }

  saveItem(key: keyof DefaultType, value: number) {
    window.localStorage.setItem(key, value.toString());
    this.initialization();
  }
}
