// TODO: JSDoc

declare interface WindowOptions {
	/**
	 * Расположение по оси X
	 *
	 * @type {number}
	 */
	x: number;

	/**
	 * Расположение по оси Y
	 *
	 * @type {number}
	 */
	y: number;

	/**
	 * Ширина
	 *
	 * @type {number}
	 */
	width: number;

	/**
	 * Высота
	 *
	 * @type {number}
	 */
	height: number;
}

/**
 * Окно. Для более удобного взаимодействия с положением, размером и т.д...
 *
 * @class
 */
export class Window {
	/**
	 * Расположение по оси X
	 *
	 * @private
	 * @type {number}
	 */
	private x: number;

	/**
	 * Расположение по оси Y
	 *
	 * @private
	 * @type {number}
	 */
	private y: number;

	/**
	 * Ширина
	 *
	 * @private
	 * @type {number}
	 */
	private width: number;

	/**
	 * Высота
	 *
	 * @private
	 * @type {number}
	 */
	private height: number;

	/**
	 * @constructor
	 * @param {WindowOptions} options Настройки для окна
	 */
	constructor(options: WindowOptions) {
		this.x = options.x || 10;
		this.y = options.y || 10;
		this.width = options.width || 20;
		this.height = options.height || 20;
	}

	public readonly GetX = (): number => {
		return this.x;
	};

	public readonly SetX = <V extends number>(value: V): Window => {
		this.x = value;

		return this;
	};

	public readonly GetY = (): number => {
		return this.y;
	};

	public readonly SetY = <V extends number>(value: V): Window => {
		this.y = value;

		return this;
	};

	public readonly GetWidth = (): number => {
		return this.width;
	};

	public readonly SetWidth = <V extends number>(value: V): Window => {
		this.width = value;

		return this;
	};

	public readonly GetHeight = (): number => {
		return this.height;
	};

	public readonly SetHeight = <V extends number>(value: V): Window => {
		this.height = value;

		return this;
	};

	public readonly GetPosition = (): { x: number; y: number } => {
		return {
			x: this.x,
			y: this.y,
		};
	};

	public readonly SetPosition = <X extends number, Y extends number>(options: { x: X; y: Y }): Window => {
		this.x = options.x;
		this.y = options.y;

		return this;
	};

	public readonly GetSize = (): { width: number; height: number } => {
		return {
			width: this.width,
			height: this.height,
		};
	};

	public readonly SetSize = <W extends number, H extends number>(options: { width: W; height: H }): Window => {
		this.width = options.width;
		this.height = options.height;

		return this;
	};

	public readonly IsInBouds = (options: WindowOptions & { size_included?: boolean }): boolean => {
		const { x, y, width, height } = options;
		const size_included = options.size_included || false;

		return size_included
			? this.x >= x && this.y >= y && this.x + this.width <= x + width && this.y + this.height <= y + height
			: this.x + this.width >= x && this.y + this.height >= y && this.x <= x + width && this.y <= y + height;
	};

	public readonly toJSON = (): WindowOptions => {
		return {
			x: this.x,
			y: this.y,
			width: this.width,
			height: this.height,
		};
	};
}
