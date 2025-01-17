import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../../../../../external/solid/web.js';
import '../utils/api.js';
import '../../../../../external/solid/solid.js';
import '../form-control/api.js';
import '../utils/api.js';
import './combobox-context.js';
define(
			de[2636],
			he([1, 0, 2, 2, 2, 115, 13, 593, 115, 486]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }), (e.$anb = u);
				function u(a) {
					let h;
					const c = (0, d.$5mb)(),
						n = (0, r.$2mb)(),
						g = (0, E.$wjb)({ id: n.generateId("input") }, a),
						[p, o, f] = (0, C.splitProps)(
							g,
							[
								"ref",
								"disabled",
								"onInput",
								"onPointerDown",
								"onClick",
								"onKeyDown",
								"onFocus",
								"onBlur",
							],
							d.$8mb,
						),
						b = () => n.listState().collection(),
						s = () => n.listState().selectionManager(),
						l = () => p.disabled || n.isDisabled() || c.isDisabled(),
						{ fieldProps: y } = (0, d.$9mb)(o),
						$ = (k) => {
							if (((0, E.$Kkb)(k, p.onInput), c.isReadOnly() || l())) return;
							const L = k.target;
							n.setInputValue(L.value),
								(L.value = n.inputValue() ?? ""),
								n.isOpen()
									? b().getSize() <= 0 &&
										!n.allowsEmptyCollection() &&
										n.close()
									: n.open(!1, "input");
						},
						v = (k) => {
							if (((0, E.$Kkb)(k, p.onKeyDown), !(c.isReadOnly() || l())))
								switch (
									(n.isOpen() && (0, E.$Kkb)(k, n.onInputKeyDown), k.key)
								) {
									case "Enter":
										if (n.isOpen()) {
											k.preventDefault();
											const L = s().focusedKey();
											L != null && s().select(L);
										}
										break;
									case "Tab":
										n.isOpen() && (n.close(), n.resetInputValue());
										break;
									case "Escape":
										n.isOpen()
											? (n.close(), n.resetInputValue())
											: n.setInputValue("");
										break;
									case "ArrowDown":
										n.isOpen() || n.open(k.altKey ? !1 : "first", "manual");
										break;
									case "ArrowUp":
										n.isOpen()
											? k.altKey && (n.close(), n.resetInputValue())
											: n.open("last", "manual");
										break;
									case "ArrowLeft":
									case "ArrowRight":
										s().setFocusedKey(void 0);
										break;
									case "Backspace":
										if (
											n.removeOnBackspace() &&
											s().selectionMode() === "multiple" &&
											n.inputValue() === ""
										) {
											const L = [...s().selectedKeys()].pop() ?? "";
											s().toggleSelection(L);
										}
										break;
								}
						},
						S = (k) => {
							(0, E.$Kkb)(k, p.onFocus),
								!n.isInputFocused() && n.setIsInputFocused(!0);
						},
						I = (k) => {
							(0, E.$Kkb)(k, p.onBlur),
								!(
									(0, E.$Ojb)(n.controlRef(), k.relatedTarget) ||
									(0, E.$Ojb)(n.contentRef(), k.relatedTarget)
								) && n.setIsInputFocused(!1);
						};
					let T = 0;
					const P = (k) => {
						if (!h || c.isReadOnly() || l()) return;
						if (k.timeStamp - T < 500) {
							k.preventDefault(), h.focus();
							return;
						}
						const L = k.target.getBoundingClientRect(),
							D = k.changedTouches[0],
							M = Math.ceil(L.left + 0.5 * L.width),
							N = Math.ceil(L.top + 0.5 * L.height);
						D.clientX === M &&
							D.clientY === N &&
							(k.preventDefault(),
							h.focus(),
							n.toggle(!1, "manual"),
							(T = k.timeStamp));
					};
					return (0, t.createComponent)(
						m.$5kb,
						(0, i.mergeProps)(
							{
								as: "input",
								ref(k) {
									const L = (0, E.mergeRefs)((D) => {
										n.setInputRef(D), (h = D);
									}, p.ref);
									typeof L == "function" && L(k);
								},
								get id() {
									return y.id();
								},
								get value() {
									return n.inputValue();
								},
								get required() {
									return c.isRequired();
								},
								get disabled() {
									return c.isDisabled();
								},
								get readonly() {
									return c.isReadOnly();
								},
								get placeholder() {
									return n.placeholder();
								},
								type: "text",
								role: "combobox",
								autoComplete: "off",
								autoCorrect: "off",
								spellCheck: "false",
								"aria-haspopup": "listbox",
								"aria-autocomplete": "list",
								get "aria-expanded"() {
									return n.isOpen();
								},
								get "aria-controls"() {
									return (0, w.memo)(() => !!n.isOpen())()
										? n.listboxId()
										: void 0;
								},
								get "aria-activedescendant"() {
									return n.activeDescendant();
								},
								get "aria-label"() {
									return y.ariaLabel();
								},
								get "aria-labelledby"() {
									return y.ariaLabelledBy();
								},
								get "aria-describedby"() {
									return y.ariaDescribedBy();
								},
								get "aria-invalid"() {
									return c.validationState() === "invalid" || void 0;
								},
								get "aria-required"() {
									return c.isRequired() || void 0;
								},
								get "aria-disabled"() {
									return c.isDisabled() || void 0;
								},
								get "aria-readonly"() {
									return c.isReadOnly() || void 0;
								},
								onInput: $,
								onKeyDown: v,
								onFocus: S,
								onBlur: I,
								onTouchEnd: P,
							},
							() => n.dataset(),
							() => c.dataset(),
							f,
						),
					);
				}
			},
		),
		