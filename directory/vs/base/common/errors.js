import '../../../require.js';
import '../../../exports.js';
define(de[29], he([1, 0]), function (ce /*require*/,
 e /*exports*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$gb =
					e.$fb =
					e.$eb =
					e.$db =
					e.$cb =
					e.$ab =
					e.$9 =
					e.$1 =
					e.$Z =
						void 0),
				(e.setUnexpectedErrorHandler = i),
				(e.$3 = w),
				(e.$4 = E),
				(e.$5 = C),
				(e.$6 = d),
				(e.$7 = m),
				(e.$8 = u),
				(e.$0 = h),
				(e.$$ = c),
				(e.$_ = n),
				(e.$bb = p);
			class t {
				constructor() {
					(this.b = []),
						(this.a = function ($) {
							setTimeout(() => {
								throw $.stack
									? s.isErrorNoTelemetry($)
										? new s(
												$.message +
													`

` +
													$.stack,
											)
										: new Error(
												$.message +
													`

` +
													$.stack,
											)
									: $;
							}, 0);
						});
				}
				addListener($) {
					return (
						this.b.push($),
						() => {
							this.d($);
						}
					);
				}
				c($) {
					this.b.forEach((v) => {
						v($);
					});
				}
				d($) {
					this.b.splice(this.b.indexOf($), 1);
				}
				setUnexpectedErrorHandler($) {
					this.a = $;
				}
				getUnexpectedErrorHandler() {
					return this.a;
				}
				onUnexpectedError($) {
					this.a($), this.c($);
				}
				onUnexpectedExternalError($) {
					this.a($);
				}
			}
			(e.$Z = t), (e.$1 = new t());
			function i(y) {
				e.$1.setUnexpectedErrorHandler(y);
			}
			function w(y) {
				if (!y || typeof y != "object") return !1;
				const $ = y;
				return $.code === "EPIPE" && $.syscall?.toUpperCase() === "WRITE";
			}
			function E(y) {
				u(y) || e.$1.onUnexpectedError(y);
			}
			function C(y) {
				u(y) || e.$1.onUnexpectedExternalError(y);
			}
			function d(y) {
				if (y instanceof Error) {
					const { name: $, message: v } = y,
						S = y.stacktrace || y.stack;
					return {
						$isError: !0,
						name: $,
						message: v,
						stack: S,
						noTelemetry: s.isErrorNoTelemetry(y),
					};
				}
				return y;
			}
			function m(y) {
				let $;
				return (
					y.noTelemetry
						? ($ = new s())
						: (($ = new Error()), ($.name = y.name)),
					($.message = y.message),
					($.stack = y.stack),
					$
				);
			}
			const r = "Canceled";
			function u(y) {
				return y instanceof a
					? !0
					: y instanceof Error && y.name === r && y.message === r;
			}
			class a extends Error {
				constructor() {
					super(r), (this.name = this.message);
				}
			}
			e.$9 = a;
			function h() {
				const y = new Error(r);
				return (y.name = y.message), y;
			}
			function c(y) {
				return y
					? new Error(`Illegal argument: ${y}`)
					: new Error("Illegal argument");
			}
			function n(y) {
				return y
					? new Error(`Illegal state: ${y}`)
					: new Error("Illegal state");
			}
			class g extends TypeError {
				constructor($) {
					super(
						$
							? `${$} is read-only and cannot be changed`
							: "Cannot change read-only property",
					);
				}
			}
			e.$ab = g;
			function p(y) {
				return y
					? y.message
						? y.message
						: y.stack
							? y.stack.split(`
`)[0]
							: String(y)
					: "Error";
			}
			class o extends Error {
				constructor($) {
					super("NotImplemented"), $ && (this.message = $);
				}
			}
			e.$cb = o;
			class f extends Error {
				constructor($) {
					super("NotSupported"), $ && (this.message = $);
				}
			}
			e.$db = f;
			class b extends Error {
				constructor() {
					super(...arguments), (this.isExpected = !0);
				}
			}
			e.$eb = b;
			class s extends Error {
				constructor($) {
					super($), (this.name = "CodeExpectedError");
				}
				static fromError($) {
					if ($ instanceof s) return $;
					const v = new s();
					return (v.message = $.message), (v.stack = $.stack), v;
				}
				static isErrorNoTelemetry($) {
					return $.name === "CodeExpectedError";
				}
			}
			e.$fb = s;
			class l extends Error {
				constructor($) {
					super($ || "An unexpected bug occurred."),
						Object.setPrototypeOf(this, l.prototype);
				}
			}
			e.$gb = l;
		})
