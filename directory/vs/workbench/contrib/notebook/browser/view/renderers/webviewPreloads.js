import '../../../../../../../require.js';
import '../../../../../../../exports.js';
define(de[3103], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$N2b = i);
			async function t(w) {
				const C = navigator.userAgent.indexOf("Chrome") >= 0,
					d = new TextEncoder(),
					m = new TextDecoder();
				function r() {
					let Te, Ee;
					return {
						promise: new Promise((Be, Se) => {
							(Te = Be), (Ee = Se);
						}),
						resolve: Te,
						reject: Ee,
					};
				}
				let u = w.options;
				const a = w.isWorkspaceTrusted;
				let h = w.renderOptions;
				const c = W(),
					n = globalThis.acquireVsCodeApi,
					g = n();
				delete globalThis.acquireVsCodeApi;
				const p = new CSSStyleSheet();
				p.replaceSync(w.style.tokenizationCss);
				const o =
					typeof requestIdleCallback != "function" ||
					typeof cancelIdleCallback != "function"
						? (Te) => {
								setTimeout(() => {
									if (Ee) return;
									const Ie = Date.now() + 15;
									Te(
										Object.freeze({
											didTimeout: !0,
											timeRemaining() {
												return Math.max(0, Ie - Date.now());
											},
										}),
									);
								});
								let Ee = !1;
								return {
									dispose() {
										Ee || (Ee = !0);
									},
								};
							}
						: (Te, Ee) => {
								const Ie = requestIdleCallback(
									Te,
									typeof Ee == "number" ? { timeout: Ee } : void 0,
								);
								let Be = !1;
								return {
									dispose() {
										Be || ((Be = !0), cancelIdleCallback(Ie));
									},
								};
							};
				function f(Te) {
					for (const Ee of Te.composedPath())
						if (Ee instanceof HTMLElement && Ee.classList.contains("output"))
							return { id: Ee.id };
				}
				let b;
				const s = (Te) => {
						const Ee = Te && f(Te);
						Ee &&
							((b = void 0),
							setTimeout(() => {
								b?.id !== Ee.id && He("outputBlur", Ee);
							}, 0));
					},
					l = (Te) => {
						b = f(Te);
						const Ee = window.document.activeElement;
						if (!Ee) return;
						const Ie = b?.id;
						Ie &&
							(Ee.tagName === "INPUT" ||
								Ee.tagName === "TEXTAREA" ||
								Ee.tagName === "SELECT") &&
							(He("outputInputFocus", { inputFocused: !0, id: Ie }),
							Ee.addEventListener(
								"blur",
								() => {
									He("outputInputFocus", { inputFocused: !1, id: Ie });
								},
								{ once: !0 },
							));
					},
					y = (Te) => {
						if (!Te || !Te.view || !Te.view.document) return;
						const Ee = (b = f(Te));
						for (const Ie of Te.composedPath())
							if (Ie instanceof HTMLAnchorElement && Ie.href) {
								if (Ie.href.startsWith("blob:"))
									Ee && He("outputFocus", Ee), k(Ie.href, Ie.download);
								else if (Ie.href.startsWith("data:"))
									Ee && He("outputFocus", Ee), P(Ie.href, Ie.download);
								else if (Ie.getAttribute("href")?.trim().startsWith("#")) {
									if (!Ie.hash) {
										He("scroll-to-reveal", { scrollTop: 0 });
										return;
									}
									const Be = Ie.hash.substring(1);
									let Se = Te.view.document.getElementById(Be);
									if (!Se) {
										for (const ke of Te.view.document.querySelectorAll(
											".preview",
										))
											if (((Se = ke.shadowRoot?.getElementById(Be)), Se)) break;
									}
									if (Se) {
										const ke = Se.getBoundingClientRect().top + Te.view.scrollY;
										He("scroll-to-reveal", { scrollTop: ke });
										return;
									}
								} else {
									const Be = Ie.getAttribute("href");
									Be &&
										(Be.startsWith("command:") && Ee && He("outputFocus", Ee),
										He("clicked-link", { href: Be }));
								}
								Te.preventDefault(), Te.stopPropagation();
								return;
							}
						Ee && He("outputFocus", Ee);
					},
					$ = () => {
						const Te = window.getSelection();
						Te && Te.removeAllRanges();
					},
					v = (Te) => {
						const Ee = window.getSelection();
						if (!Ee) return;
						const Ie = window.document.getElementById(Te);
						if (!Ie) return;
						Ee.removeAllRanges();
						const Be = document.createRange();
						Be.selectNode(Ie), Ee.addRange(Be);
					},
					S = (Te) => {
						if (!window.document.getElementById(Te)) return;
						const Ie = window.document.activeElement;
						(Ie?.tagName === "INPUT" || Ie?.tagName === "TEXTAREA") &&
							Ie.select();
					},
					I = (Te) => {
						if (!b?.id || !Te.shiftKey) return;
						if (
							Te.shiftKey &&
							(Te.code === "ArrowUp" || Te.code === "ArrowDown")
						) {
							Te.stopPropagation();
							return;
						}
						if (
							!(Te.code === "PageUp" || Te.code === "PageDown") &&
							!(
								Te.metaKey &&
								(Te.code === "ArrowDown" || Te.code === "ArrowUp")
							)
						)
							return;
						const Ee = window.document.getElementById(b.id),
							Ie = window.getSelection();
						if (!Ee || !Ie?.anchorNode) return;
						const Be = window.document.activeElement;
						if (Be?.tagName === "INPUT" || Be?.tagName === "TEXTAREA") return;
						Te.stopPropagation(), Te.preventDefault();
						const { anchorNode: Se, anchorOffset: ke } = Ie,
							Ue = document.createRange();
						Te.code === "PageDown" || Te.code === "ArrowDown"
							? (Ue.setStart(Se, ke), Ue.setEnd(Ee, 1))
							: (Ue.setStart(Ee, 0), Ue.setEnd(Se, ke)),
							Ie.removeAllRanges(),
							Ie.addRange(Ue);
					},
					T = (Te) => {
						if (!b?.id) return;
						const Ee = window.document.activeElement;
						if (
							!(Ee?.tagName === "INPUT" || Ee?.tagName === "TEXTAREA") &&
							((Te.key === "a" && Te.ctrlKey) || (Te.metaKey && Te.key === "a"))
						) {
							Te.preventDefault();
							return;
						}
					},
					P = async (Te, Ee) => {
						He("clicked-data-url", { data: Te, downloadName: Ee });
					},
					k = async (Te, Ee) => {
						try {
							const Be = await (await fetch(Te)).blob(),
								Se = new FileReader();
							Se.addEventListener("load", () => {
								P(Se.result, Ee);
							}),
								Se.readAsDataURL(Be);
						} catch (Ie) {
							console.error(Ie.message);
						}
					};
				window.document.body.addEventListener("click", y),
					window.document.body.addEventListener("focusin", l),
					window.document.body.addEventListener("focusout", s),
					window.document.body.addEventListener("keydown", I),
					window.document.body.addEventListener("keydown", T);
				function L() {
					return Object.freeze({
						onDidReceiveKernelMessage: ee.event,
						postKernelMessage: (Te) =>
							He("customKernelMessage", { message: Te }),
					});
				}
				async function D(Te) {
					try {
						return await M(Te);
					} catch (Ee) {
						throw (console.error(Ee), Ee);
					}
				}
				async function M(Te) {
					const Ee = await __import(Te);
					if (!Ee.activate) {
						console.error(
							`Notebook preload '${Te}' was expected to be a module but it does not export an 'activate' function`,
						);
						return;
					}
					return Ee.activate(L());
				}
				const N = new (class {
					constructor() {
						this.c = new Map();
					}
					updateHeight(Te, Ee, Ie) {
						this.c.size ||
							setTimeout(() => {
								this.updateImmediately();
							}, 0);
						const Be = this.c.get(Te);
						Be && Be.isOutput
							? this.c.set(Te, {
									id: Te,
									height: Ee,
									init: Be.init,
									isOutput: Be.isOutput,
								})
							: this.c.set(Te, { id: Te, height: Ee, ...Ie });
					}
					updateImmediately() {
						this.c.size &&
							(He("dimension", { updates: Array.from(this.c.values()) }),
							this.c.clear());
					}
				})();
				function A(Te) {
					return Te > 2.1;
				}
				const R = new (class {
					constructor() {
						(this.f = new WeakMap()),
							(this.c = new ResizeObserver((Te) => {
								for (const Ee of Te) {
									if (!window.document.body.contains(Ee.target)) continue;
									const Ie = this.f.get(Ee.target);
									if (
										!Ie ||
										(this.j(Ie.cellId), Ee.target.id !== Ie.id) ||
										!Ee.contentRect
									)
										continue;
									if (!Ie.output) {
										this.h(Ie, Ee.target.offsetHeight);
										continue;
									}
									const Be = A(Ee.contentRect.height);
									(Be && Ie.lastKnownPadding === 0) ||
									(!Be && Ie.lastKnownPadding !== 0)
										? window.requestAnimationFrame(() => {
												Be
													? (Ee.target.style.padding = `${w.style.outputNodePadding}px ${w.style.outputNodePadding}px ${w.style.outputNodePadding}px ${w.style.outputNodeLeftPadding}px`)
													: (Ee.target.style.padding = "0px"),
													this.h(Ie, Be ? Ee.target.offsetHeight : 0);
											})
										: this.h(Ie, Be ? Ee.target.offsetHeight : 0);
								}
							}));
					}
					h(Te, Ee) {
						Te.lastKnownHeight !== Ee &&
							((Te.lastKnownHeight = Ee),
							N.updateHeight(Te.id, Ee, { isOutput: Te.output }));
					}
					observe(Te, Ee, Ie, Be) {
						this.f.has(Te) ||
							(this.f.set(Te, {
								id: Ee,
								output: Ie,
								lastKnownPadding: w.style.outputNodePadding,
								lastKnownHeight: -1,
								cellId: Be,
							}),
							this.c.observe(Te));
					}
					j(Te) {
						clearTimeout(this.g),
							(this.g = setTimeout(() => {
								He("outputResized", { cellId: Te });
							}, 250));
					}
				})();
				let O, B, U, z;
				function F(Te, Ee) {
					if (((U = Te), Ee === void 0))
						return (
							(z = Date.now()),
							(O = void 0),
							Te.setAttribute("recentlyScrolled", "true"),
							clearTimeout(B),
							(B = setTimeout(() => {
								U?.removeAttribute("recentlyScrolled");
							}, 300)),
							!0
						);
					if (Te.hasAttribute("recentlyScrolled")) {
						if (z && Date.now() - z > 400) {
							if (O && Ee < 0 && Ee < O - 8)
								return (
									clearTimeout(B), U?.removeAttribute("recentlyScrolled"), !1
								);
							if (O && Ee > 0 && Ee > O + 8)
								return (
									clearTimeout(B), U?.removeAttribute("recentlyScrolled"), !1
								);
							clearTimeout(B),
								(B = setTimeout(() => {
									U?.removeAttribute("recentlyScrolled");
								}, 50));
						} else
							clearTimeout(B),
								(B = setTimeout(() => {
									U?.removeAttribute("recentlyScrolled");
								}, 300));
						return (O = Ee), !0;
					}
					return !1;
				}
				function x(Te) {
					for (let Ee = Te.target; Ee; Ee = Ee.parentNode) {
						if (
							!(Ee instanceof Element) ||
							Ee.id === "container" ||
							Ee.classList.contains("cell_container") ||
							Ee.classList.contains("markup") ||
							Ee.classList.contains("output_container")
						)
							return !1;
						if (Te.deltaY < 0 && Ee.scrollTop > 0) return F(Ee), !0;
						if (
							Te.deltaY > 0 &&
							Ee.scrollTop + Ee.clientHeight < Ee.scrollHeight
						) {
							if (
								Ee.scrollHeight - Ee.scrollTop - Ee.clientHeight < 2 ||
								window.getComputedStyle(Ee).overflowY === "hidden" ||
								window.getComputedStyle(Ee).overflowY === "visible"
							)
								continue;
							return F(Ee), !0;
						}
						if (F(Ee, Te.deltaY)) return !0;
					}
					return !1;
				}
				const H = (Te) => {
					Te.defaultPrevented ||
						x(Te) ||
						He("did-scroll-wheel", {
							payload: {
								deltaMode: Te.deltaMode,
								deltaX: Te.deltaX,
								deltaY: Te.deltaY,
								deltaZ: Te.deltaZ,
								wheelDelta:
									Te.wheelDelta && C
										? Te.wheelDelta / window.devicePixelRatio
										: Te.wheelDelta,
								wheelDeltaX:
									Te.wheelDeltaX && C
										? Te.wheelDeltaX / window.devicePixelRatio
										: Te.wheelDeltaX,
								wheelDeltaY:
									Te.wheelDeltaY && C
										? Te.wheelDeltaY / window.devicePixelRatio
										: Te.wheelDeltaY,
								detail: Te.detail,
								shiftKey: Te.shiftKey,
								type: Te.type,
							},
						});
				};
				function q(Te, Ee) {
					const Ie =
						window.document.getElementById(Te) ??
						(Ee ? window.document.getElementById(Ee) : void 0);
					if (Ie) {
						if (Ie.contains(window.document.activeElement)) return;
						const Be = Ie.id;
						let Se = Ie.querySelector(
							'[tabindex="0"], [href], button, input, option, select, textarea',
						);
						if (!Se)
							(Se = Ie),
								(Se.tabIndex = -1),
								He("outputInputFocus", { inputFocused: !1, id: Be });
						else {
							const ke = Se.tagName === "INPUT" || Se.tagName === "TEXTAREA";
							He("outputInputFocus", { inputFocused: ke, id: Be });
						}
						(b = Ie), He("outputFocus", { id: Ie.id }), Se.focus();
					}
				}
				function V(Te, Ee) {
					const Ie = document.createElement("div");
					return (
						(Ie.id = `focus-sink-${Te}`),
						(Ie.tabIndex = 0),
						Ie.addEventListener("focus", () => {
							He("focus-editor", { cellId: Te, focusNext: Ee });
						}),
						Ie
					);
				}
				function G(Te, Ee = "mark", Ie = {}) {
					function Be(Re) {
						if (!Re.startContainer.ownerDocument) return [];
						if (
							Re.startContainer.nodeType === Node.TEXT_NODE &&
							Re.startOffset > 0
						) {
							const Ze = Re.startContainer,
								et = Re.endOffset,
								rt = Ze.splitText(Re.startOffset);
							Re.endContainer === Ze && Re.setEnd(rt, et - Re.startOffset),
								Re.setStart(rt, 0);
						}
						Re.endContainer.nodeType === Node.TEXT_NODE &&
							Re.endOffset < Re.endContainer.length &&
							Re.endContainer.splitText(Re.endOffset);
						const je = Re.startContainer.ownerDocument.createTreeWalker(
							Re.commonAncestorContainer,
							NodeFilter.SHOW_TEXT,
							(Ze) =>
								Re.intersectsNode(Ze)
									? NodeFilter.FILTER_ACCEPT
									: NodeFilter.FILTER_REJECT,
						);
						je.currentNode = Re.startContainer;
						const Ve = [];
						for (
							je.currentNode.nodeType === Node.TEXT_NODE &&
							Ve.push(je.currentNode);
							je.nextNode() && Re.comparePoint(je.currentNode, 0) !== 1;
						)
							je.currentNode.nodeType === Node.TEXT_NODE &&
								Ve.push(je.currentNode);
						return Ve;
					}
					function Se(Re, je, Ve) {
						const Ze = Re.ownerDocument.createElement(je);
						Object.keys(Ve).forEach((rt) => {
							Ze.setAttribute(rt, Ve[rt]);
						});
						const et = Re.ownerDocument.createRange();
						return et.selectNode(Re), et.surroundContents(Ze), Ze;
					}
					if (Te.collapsed) return { remove: () => {}, update: () => {} };
					const ke = Be(Te),
						Ue = [];
					for (const Re in ke) {
						const je = Se(ke[Re], Ee, Ie);
						Ue.push(je);
					}
					function qe(Re) {
						if (Re.childNodes.length === 1)
							Re.parentNode?.replaceChild(Re.firstChild, Re);
						else {
							for (; Re.firstChild; )
								Re.parentNode?.insertBefore(Re.firstChild, Re);
							Re.remove();
						}
					}
					function Ae() {
						for (const Re in Ue) qe(Ue[Re]);
					}
					function Me(Re, je = {}) {
						Object.keys(je).forEach((Ve) => {
							Re.setAttribute(Ve, je[Ve]);
						});
					}
					function De(Re) {
						for (const je in Ue) Me(Ue[je], Re);
					}
					return { remove: Ae, update: De };
				}
				function K(Te) {
					const Ee = window.getSelection();
					if (Ee)
						try {
							Ee.removeAllRanges();
							const Ie = document.createRange();
							Ie.setStart(Te.startContainer, Te.startOffset),
								Ie.setEnd(Te.endContainer, Te.endOffset),
								Ee.addRange(Ie);
						} catch (Ie) {
							console.log(Ie);
						}
				}
				function J(Te, Ee, Ie = "mark", Be = {}) {
					if (Ee) {
						const Se = G(Te, Ie, Be);
						return {
							range: Te,
							dispose: Se.remove,
							update: (ke, Ue) => {
								Ue === void 0
									? Se.update({ style: `background-color: ${ke}` })
									: Se.update({ class: Ue });
							},
						};
					} else {
						window.document.execCommand("hiliteColor", !1, te);
						const Se = window.getSelection().getRangeAt(0).cloneRange(),
							ke = {
								collapsed: Se.collapsed,
								commonAncestorContainer: Se.commonAncestorContainer,
								endContainer: Se.endContainer,
								endOffset: Se.endOffset,
								startContainer: Se.startContainer,
								startOffset: Se.startOffset,
							};
						return {
							range: ke,
							dispose: () => {
								K(ke);
								try {
									(document.designMode = "On"),
										window.document.execCommand("removeFormat", !1, void 0),
										(document.designMode = "Off"),
										window.getSelection()?.removeAllRanges();
								} catch (Ue) {
									console.log(Ue);
								}
							},
							update: (Ue, qe) => {
								K(ke);
								try {
									(document.designMode = "On"),
										window.document.execCommand("removeFormat", !1, void 0),
										window.document.execCommand("hiliteColor", !1, Ue),
										(document.designMode = "Off"),
										window.getSelection()?.removeAllRanges();
								} catch (Ae) {
									console.log(Ae);
								}
							},
						};
					}
				}
				function W(Te = () => {}) {
					const Ee = new Set();
					return {
						fire(Ie) {
							for (const Be of [...Ee]) Be.fn.call(Be.thisArg, Ie);
						},
						event(Ie, Be, Se) {
							const ke = { fn: Ie, thisArg: Be },
								Ue = {
									dispose: () => {
										Ee.delete(ke), Te(Ee);
									},
								};
							return (
								Ee.add(ke),
								Te(Ee),
								Se instanceof Array ? Se.push(Ue) : Se && Se.add(Ue),
								Ue
							);
						},
					};
				}
				function X(Te, Ee, Ie) {
					Ee.innerText = Te;
					const Be = document.createElement("ul");
					for (const Se of Ie) {
						console.error(Se);
						const ke = document.createElement("li");
						(ke.innerText = Se.message), Be.appendChild(ke);
					}
					Ee.appendChild(Be);
				}
				const Y = new (class {
					constructor() {
						(this.c = 0), (this.f = new Map());
					}
					getOutputItem(Te, Ee) {
						const Ie = this.c++,
							{ promise: Be, resolve: Se } = r();
						return (
							this.f.set(Ie, { resolve: Se }),
							He("getOutputItem", { requestId: Ie, outputId: Te, mime: Ee }),
							Be
						);
					}
					resolveOutputItem(Te, Ee) {
						const Ie = this.f.get(Te);
						Ie && (this.f.delete(Te), Ie.resolve(Ee));
					}
				})();
				let ie = !1;
				function ne(Te, Ee, Ie, Be, Se, ke) {
					function Ue(De, Re, je, Ve, Ze) {
						return Object.freeze({
							id: De,
							mime: Re,
							metadata: je,
							appendedText() {
								if (Ze) return m.decode(Ze.valueBytes);
							},
							data() {
								return Ve;
							},
							text() {
								return m.decode(Ve);
							},
							json() {
								return JSON.parse(this.text());
							},
							blob() {
								return new Blob([Ve], { type: this.mime });
							},
							get _allOutputItems() {
								return (
									ie ||
										((ie = !0),
										console.warn(
											"'_allOutputItems' is proposed API. DO NOT ship an extension that depends on it!",
										)),
									Ae
								);
							},
						});
					}
					const qe = new Map(),
						Ae = Object.freeze(
							Se.map((De) => {
								const Re = De.mime;
								return Object.freeze({
									mime: Re,
									getItem() {
										const je = qe.get(Re);
										if (je) return je;
										const Ve = Y.getOutputItem(Te, Re).then((Ze) =>
											Ze ? Ue(Te, Ze.mime, Ie, Ze.valueBytes) : void 0,
										);
										return qe.set(Re, Ve), Ve;
									},
								});
							}),
						),
						Me = Ue(Te, Ee, Ie, Be, ke);
					return qe.set(Ee, Promise.resolve(Me)), Me;
				}
				const ee = W(),
					_ = window.trustedTypes?.createPolicy("notebookRenderer", {
						createHTML: (Te) => Te,
						createScript: (Te) => Te,
					});
				window.addEventListener("wheel", H);
				const te = window.getComputedStyle(
						window.document.getElementById("_defaultColorPalatte"),
					).color,
					Q = window.getComputedStyle(
						window.document.getElementById("_defaultColorPalatte"),
					).backgroundColor;
				class Z {
					constructor() {
						this.c = new Map();
					}
					addHighlights(Ee, Ie) {
						for (let Se = Ee.length - 1; Se >= 0; Se--) {
							const ke = Ee[Se],
								Ue = J(
									ke.originalRange,
									!0,
									"mark",
									ke.isShadow
										? { style: "background-color: " + te + ";" }
										: { class: "find-match" },
								);
							ke.highlightResult = Ue;
						}
						const Be = { matches: Ee, currentMatchIndex: -1 };
						this.c.set(Ie, Be);
					}
					removeHighlights(Ee) {
						this.c.get(Ee)?.matches.forEach((Ie) => {
							Ie.highlightResult?.dispose();
						}),
							this.c.delete(Ee);
					}
					highlightCurrentMatch(Ee, Ie) {
						const Be = this.c.get(Ie);
						if (!Be) {
							console.error(
								"Modified current highlight match before adding highlight list.",
							);
							return;
						}
						const Se = Be.matches[Be.currentMatchIndex];
						Se?.highlightResult?.update(
							te,
							Se.isShadow ? void 0 : "find-match",
						);
						const ke = Be.matches[Ee];
						Be.currentMatchIndex = Ee;
						const Ue = window.getSelection();
						if (ke && Ue && ke.highlightResult) {
							let qe = 0;
							try {
								const Ae = window.document
										.getElementById(ke.id)
										.getBoundingClientRect().top,
									Me = document.createRange();
								Me.selectNode(ke.highlightResult.range.startContainer),
									ke.highlightResult.range.startContainer.parentElement?.scrollIntoView(
										{ behavior: "auto", block: "end", inline: "nearest" },
									);
								const De = Me.getBoundingClientRect().top;
								Me.detach(), (qe = De - Ae);
							} catch (Ae) {
								console.error(Ae);
							}
							ke.highlightResult?.update(
								Q,
								ke.isShadow ? void 0 : "current-find-match",
							),
								window.document.getSelection()?.removeAllRanges(),
								He("didFindHighlightCurrent", { offset: qe });
						}
					}
					unHighlightCurrentMatch(Ee, Ie) {
						const Be = this.c.get(Ie);
						if (!Be) return;
						const Se = Be.matches[Ee];
						Se &&
							Se.highlightResult &&
							Se.highlightResult.update(
								te,
								Se.isShadow ? void 0 : "find-match",
							);
					}
					dispose() {
						window.document.getSelection()?.removeAllRanges(),
							this.c.forEach((Ee) => {
								Ee.matches.forEach((Ie) => {
									Ie.highlightResult?.dispose();
								});
							});
					}
				}
				class se {
					constructor() {
						(this.c = new Map()),
							(this.f = new Highlight()),
							(this.f.priority = 1),
							(this.g = new Highlight()),
							(this.g.priority = 2),
							CSS.highlights?.set("find-highlight", this.f),
							CSS.highlights?.set("current-find-highlight", this.g);
					}
					_refreshRegistry(Ee = !0) {
						Ee && this.f.clear(),
							this.g.clear(),
							this.c.forEach((Ie) => {
								if (Ee)
									for (let Be = 0; Be < Ie.matches.length; Be++)
										this.f.add(Ie.matches[Be].originalRange);
								Ie.currentMatchIndex < Ie.matches.length &&
									Ie.currentMatchIndex >= 0 &&
									this.g.add(Ie.matches[Ie.currentMatchIndex].originalRange);
							});
					}
					addHighlights(Ee, Ie) {
						for (let Se = 0; Se < Ee.length; Se++)
							this.f.add(Ee[Se].originalRange);
						const Be = { matches: Ee, currentMatchIndex: -1 };
						this.c.set(Ie, Be);
					}
					highlightCurrentMatch(Ee, Ie) {
						const Be = this.c.get(Ie);
						if (!Be) {
							console.error(
								"Modified current highlight match before adding highlight list.",
							);
							return;
						}
						Be.currentMatchIndex = Ee;
						const Se = Be.matches[Ee];
						if (Se) {
							let ke = 0;
							try {
								const Ue = window.document
									.getElementById(Se.id)
									.getBoundingClientRect().top;
								Se.originalRange.startContainer.parentElement?.scrollIntoView({
									behavior: "auto",
									block: "end",
									inline: "nearest",
								}),
									(ke = Se.originalRange.getBoundingClientRect().top - Ue),
									He("didFindHighlightCurrent", { offset: ke });
							} catch (Ue) {
								console.error(Ue);
							}
						}
						this._refreshRegistry(!1);
					}
					unHighlightCurrentMatch(Ee, Ie) {
						const Be = this.c.get(Ie);
						Be && (Be.currentMatchIndex = -1);
					}
					removeHighlights(Ee) {
						this.c.delete(Ee), this._refreshRegistry();
					}
					dispose() {
						window.document.getSelection()?.removeAllRanges(),
							this.g.clear(),
							this.f.clear();
					}
				}
				const re = CSS.highlights ? new se() : new Z();
				function le(Te) {
					const Ie = Te.getRangeAt(0).cloneRange(),
						Be = Te.toString().length;
					Te.collapseToStart(),
						Te.modify("move", "backward", "lineboundary"),
						Te.modify("extend", "forward", "lineboundary");
					const Se = Te.toString(),
						ke = oe(Te.getRangeAt(0), Ie),
						Ue = { start: ke, end: ke + Be };
					return Te.removeAllRanges(), Te.addRange(Ie), { line: Se, range: Ue };
				}
				function oe(Te, Ee) {
					const Ie = ae(Te.startContainer, Ee.startContainer),
						Be = $e(Ie, Te.startContainer) + Te.startOffset;
					return $e(Ie, Ee.startContainer) + Ee.startOffset - Be;
				}
				function ae(Te, Ee) {
					const Ie = new Range();
					return (
						Ie.setStart(Te, 0), Ie.setEnd(Ee, 0), Ie.commonAncestorContainer
					);
				}
				function pe(Te) {
					let Ee = 0;
					if (Te.nodeType === Node.TEXT_NODE) Ee += Te.textContent?.length || 0;
					else for (const Ie of Te.childNodes) Ee += pe(Ie);
					return Ee;
				}
				function $e(Te, Ee) {
					if (!Ee) return 0;
					let Ie = 0;
					if (Ee === Te || !Te.contains(Ee)) return Ie;
					let Be = Ee.previousSibling;
					for (; Be; ) (Ie += pe(Be)), (Be = Be.previousSibling);
					return Ie + $e(Te, Ee.parentNode);
				}
				const ye = (Te, Ee) => {
						let Ie = !0,
							Be = [];
						const Se = document.createRange();
						Se.selectNodeContents(window.document.getElementById("findStart"));
						const ke = window.getSelection();
						ke?.removeAllRanges(),
							ke?.addRange(Se),
							Ce.toggleDragDropEnabled(!1);
						try {
							for (document.designMode = "On"; Ie && Be.length < 500; )
								if (
									((Ie = window.find(
										Te,
										!!Ee.caseSensitive,
										!1,
										!1,
										!!Ee.wholeWord,
										!0,
										!1,
									)),
									Ie)
								) {
									const Ue = window.getSelection();
									if (!Ue) {
										console.log("no selection");
										break;
									}
									if (
										Ee.includeMarkup &&
										Ue.rangeCount > 0 &&
										Ue.getRangeAt(0).startContainer.nodeType === 1 &&
										Ue.getRangeAt(0).startContainer.classList.contains("markup")
									) {
										const Ae = Ue.anchorNode?.firstChild,
											Me = Ae.shadowRoot,
											De = Me?.getSelection ? Me?.getSelection() : null;
										De &&
											De.anchorNode &&
											Be.push({
												type: "preview",
												id: Ae.id,
												cellId: Ae.id,
												container: Ae,
												isShadow: !0,
												originalRange: De.getRangeAt(0),
												searchPreviewInfo: Ee.shouldGetSearchPreviewInfo
													? le(De)
													: void 0,
											});
									}
									if (
										Ee.includeOutput &&
										Ue.rangeCount > 0 &&
										Ue.getRangeAt(0).startContainer.nodeType === 1 &&
										Ue.getRangeAt(0).startContainer.classList.contains(
											"output_container",
										)
									) {
										const Ae = Ue.getRangeAt(0).startContainer.parentElement.id,
											Me = Ue.anchorNode?.firstChild,
											De = Me.shadowRoot,
											Re = De?.getSelection ? De?.getSelection() : null;
										Re &&
											Re.anchorNode &&
											Be.push({
												type: "output",
												id: Me.id,
												cellId: Ae,
												container: Me,
												isShadow: !0,
												originalRange: Re.getRangeAt(0),
												searchPreviewInfo: Ee.shouldGetSearchPreviewInfo
													? le(Re)
													: void 0,
											});
									}
									const qe = Ue.anchorNode?.parentElement;
									if (qe) {
										const Ae = Be.length ? Be[Be.length - 1] : null;
										if (Ae && Ae.container.contains(qe) && Ee.includeOutput)
											Be.push({
												type: Ae.type,
												id: Ae.id,
												cellId: Ae.cellId,
												container: Ae.container,
												isShadow: !1,
												originalRange: Ue.getRangeAt(0),
												searchPreviewInfo: Ee.shouldGetSearchPreviewInfo
													? le(Ue)
													: void 0,
											});
										else
											for (
												let Me = qe;
												Me && Me instanceof Element;
												Me = Me.parentElement
											) {
												if (
													Me.classList.contains("output") &&
													Ee.includeOutput
												) {
													const De = Me.parentElement?.parentElement?.id;
													De &&
														Be.push({
															type: "output",
															id: Me.id,
															cellId: De,
															container: Me,
															isShadow: !1,
															originalRange: Ue.getRangeAt(0),
															searchPreviewInfo: Ee.shouldGetSearchPreviewInfo
																? le(Ue)
																: void 0,
														});
													break;
												}
												if (
													Me.id === "container" ||
													Me === window.document.body
												)
													break;
											}
									} else break;
								}
						} catch (Ue) {
							console.log(Ue);
						}
						(Be = Be.filter((Ue) =>
							Ee.findIds.length ? Ee.findIds.includes(Ue.cellId) : !0,
						)),
							re.addHighlights(Be, Ee.ownerID),
							window.document.getSelection()?.removeAllRanges(),
							Ce.toggleDragDropEnabled(u.dragAndDropEnabled),
							(document.designMode = "Off"),
							He("didFind", {
								matches: Be.map((Ue, qe) => ({
									type: Ue.type,
									id: Ue.id,
									cellId: Ue.cellId,
									index: qe,
									searchPreviewInfo: Ue.searchPreviewInfo,
								})),
							});
					},
					ue = async (Te, Ee, Ie = 5) => {
						if (!window.document.hasFocus() && Ie > 0) {
							setTimeout(() => {
								ue(Te, Ee, Ie - 1);
							}, 50);
							return;
						}
						try {
							const Be =
								window.document.getElementById(Te) ??
								window.document.getElementById(Ee);
							let Se = Be?.querySelector("img");
							if (!Se) {
								const ke =
									Be?.querySelector("svg.output-image") ??
									Be?.querySelector("div.svgContainerStyle > svg");
								ke &&
									((Se = new Image()),
									(Se.src =
										"data:image/svg+xml," + encodeURIComponent(ke.outerHTML)));
							}
							if (Se) {
								const ke = Se;
								await navigator.clipboard.write([
									new ClipboardItem({
										"image/png": new Promise((Ue) => {
											const qe = document.createElement("canvas");
											(qe.width = ke.naturalWidth),
												(qe.height = ke.naturalHeight),
												qe.getContext("2d").drawImage(ke, 0, 0),
												qe.toBlob((Me) => {
													Me
														? Ue(Me)
														: console.error(
																"No blob data to write to clipboard",
															),
														qe.remove();
												}, "image/png");
										}),
									}),
								]);
							} else
								console.error(
									"Could not find image element to copy for output with id",
									Te,
								);
						} catch (Be) {
							console.error("Could not copy image:", Be);
						}
					};
				window.addEventListener("message", async (Te) => {
					const Ee = Te;
					switch (Ee.data.type) {
						case "initializeMarkup": {
							try {
								await Promise.all(
									Ee.data.cells.map((Ie) => Ce.ensureMarkupCell(Ie)),
								);
							} finally {
								N.updateImmediately(),
									He("initializedMarkup", { requestId: Ee.data.requestId });
							}
							break;
						}
						case "createMarkupCell":
							Ce.ensureMarkupCell(Ee.data.cell);
							break;
						case "showMarkupCell":
							Ce.showMarkupCell(
								Ee.data.id,
								Ee.data.top,
								Ee.data.content,
								Ee.data.metadata,
							);
							break;
						case "hideMarkupCells":
							for (const Ie of Ee.data.ids) Ce.hideMarkupCell(Ie);
							break;
						case "unhideMarkupCells":
							for (const Ie of Ee.data.ids) Ce.unhideMarkupCell(Ie);
							break;
						case "deleteMarkupCell":
							for (const Ie of Ee.data.ids) Ce.deleteMarkupCell(Ie);
							break;
						case "updateSelectedMarkupCells":
							Ce.updateSelectedCells(Ee.data.selectedCellIds);
							break;
						case "html": {
							const Ie = Ee.data;
							Ie.createOnIdle
								? ge.enqueueIdle(Ie.outputId, (Be) =>
										Ce.renderOutputCell(Ie, Be),
									)
								: ge.enqueue(Ie.outputId, (Be) => Ce.renderOutputCell(Ie, Be));
							break;
						}
						case "view-scroll": {
							Ee.data.widgets.forEach((Ie) => {
								ge.enqueue(Ie.outputId, () => {
									Ce.updateOutputsScroll([Ie]);
								});
							}),
								Ce.updateMarkupScrolls(Ee.data.markupCells);
							break;
						}
						case "clear":
							be.clearAll(),
								Ce.clearAll(),
								(window.document.getElementById("container").innerText = "");
							break;
						case "clearOutput": {
							const { cellId: Ie, rendererId: Be, outputId: Se } = Ee.data;
							ge.cancelOutput(Se), Ce.clearOutput(Ie, Se, Be);
							break;
						}
						case "hideOutput": {
							const { cellId: Ie, outputId: Be } = Ee.data;
							ge.enqueue(Be, () => {
								Ce.hideOutput(Ie);
							});
							break;
						}
						case "showOutput": {
							const {
								outputId: Ie,
								cellTop: Be,
								cellId: Se,
								content: ke,
							} = Ee.data;
							ge.enqueue(Ie, () => {
								Ce.showOutput(Se, Ie, Be),
									ke && Ce.updateAndRerender(Se, Ie, ke);
							});
							break;
						}
						case "copyImage": {
							await ue(Ee.data.outputId, Ee.data.altOutputId);
							break;
						}
						case "ack-dimension": {
							for (const { cellId: Ie, outputId: Be, height: Se } of Ee.data
								.updates)
								Ce.updateOutputHeight(Ie, Be, Se);
							break;
						}
						case "preload": {
							const Ie = Ee.data.resources;
							for (const { uri: Be } of Ie) ve.load(Be);
							break;
						}
						case "updateRenderers": {
							const { rendererData: Ie } = Ee.data;
							be.updateRendererData(Ie);
							break;
						}
						case "focus-output":
							q(Ee.data.cellOrOutputId, Ee.data.alternateId);
							break;
						case "blur-output":
							$();
							break;
						case "select-output-contents":
							v(Ee.data.cellOrOutputId);
							break;
						case "select-input-contents":
							S(Ee.data.cellOrOutputId);
							break;
						case "decorations": {
							let Ie = window.document.getElementById(Ee.data.cellId);
							Ie ||
								(Ce.ensureOutputCell(Ee.data.cellId, -1e5, !0),
								(Ie = window.document.getElementById(Ee.data.cellId))),
								Ie?.classList.add(...Ee.data.addedClassNames),
								Ie?.classList.remove(...Ee.data.removedClassNames);
							break;
						}
						case "customKernelMessage":
							ee.fire(Ee.data.message);
							break;
						case "customRendererMessage":
							be.getRenderer(Ee.data.rendererId)?.receiveMessage(
								Ee.data.message,
							);
							break;
						case "notebookStyles": {
							const Ie = window.document.documentElement.style;
							for (let Be = Ie.length - 1; Be >= 0; Be--) {
								const Se = Ie[Be];
								Se && Se.startsWith("--notebook-") && Ie.removeProperty(Se);
							}
							for (const [Be, Se] of Object.entries(Ee.data.styles))
								Ie.setProperty(`--${Be}`, Se);
							break;
						}
						case "notebookOptions":
							(u = Ee.data.options),
								Ce.toggleDragDropEnabled(u.dragAndDropEnabled),
								(h = Ee.data.renderOptions),
								c.fire(h);
							break;
						case "tokenizedCodeBlock": {
							const { codeBlockId: Ie, html: Be } = Ee.data;
							Le.highlightCodeBlock(Ie, Be);
							break;
						}
						case "tokenizedStylesChanged": {
							p.replaceSync(Ee.data.css);
							break;
						}
						case "find": {
							re.removeHighlights(Ee.data.options.ownerID),
								ye(Ee.data.query, Ee.data.options);
							break;
						}
						case "findHighlightCurrent": {
							re?.highlightCurrentMatch(Ee.data.index, Ee.data.ownerID);
							break;
						}
						case "findUnHighlightCurrent": {
							re?.unHighlightCurrentMatch(Ee.data.index, Ee.data.ownerID);
							break;
						}
						case "findStop": {
							re.removeHighlights(Ee.data.ownerID);
							break;
						}
						case "returnOutputItem":
							Y.resolveOutputItem(Ee.data.requestId, Ee.data.output);
					}
				});
				const fe = "vscode.fallbackToNextRenderer";
				class me {
					constructor(Ee) {
						(this.data = Ee), (this.c = W());
					}
					receiveMessage(Ee) {
						this.c.fire(Ee);
					}
					async renderOutputItem(Ee, Ie, Be) {
						try {
							await this.j();
						} catch (Se) {
							Be.aborted ||
								X(
									`Error loading renderer '${this.data.id}'`,
									Ie,
									Se instanceof Error ? [Se] : [],
								);
							return;
						}
						if (!this.g) {
							Be.aborted ||
								X(
									`Renderer '${this.data.id}' does not implement renderOutputItem`,
									Ie,
									[],
								);
							return;
						}
						try {
							const Se = performance.now();
							await this.g.renderOutputItem(Ee, Ie, Be),
								this.l("Rendered output item", {
									id: Ee.id,
									duration: `${performance.now() - Se}ms`,
								});
						} catch (Se) {
							if (Be.aborted) return;
							if (Se instanceof Error && Se.name === fe) throw Se;
							X(
								`Error rendering output item using '${this.data.id}'`,
								Ie,
								Se instanceof Error ? [Se] : [],
							),
								this.l("Rendering output item failed", {
									id: Ee.id,
									error: Se + "",
								});
						}
					}
					disposeOutputItem(Ee) {
						this.g?.disposeOutputItem?.(Ee);
					}
					h() {
						const { id: Ee, messaging: Ie } = this.data,
							Be = {
								setState: (Se) => g.setState({ ...g.getState(), [Ee]: Se }),
								getState: () => {
									const Se = g.getState();
									return typeof Se == "object" && Se ? Se[Ee] : void 0;
								},
								getRenderer: async (Se) => {
									const ke = be.getRenderer(Se);
									if (ke) return ke.g ? ke.g : ke.j();
								},
								workspace: {
									get isTrusted() {
										return a;
									},
								},
								settings: {
									get lineLimit() {
										return h.lineLimit;
									},
									get outputScrolling() {
										return h.outputScrolling;
									},
									get outputWordWrap() {
										return h.outputWordWrap;
									},
									get linkifyFilePaths() {
										return h.linkifyFilePaths;
									},
									get minimalError() {
										return h.minimalError;
									},
								},
								get onDidChangeSettings() {
									return c.event;
								},
							};
						return (
							Ie &&
								((Be.onDidReceiveMessage = this.c.event),
								(Be.postMessage = (Se) =>
									He("customRendererMessage", {
										rendererId: Ee,
										message: Se,
									}))),
							Object.freeze(Be)
						);
					}
					j() {
						return (this.f ??= this.k()), this.f;
					}
					async k() {
						this.l("Start loading renderer");
						try {
							await ve.waitForAllCurrent();
							const Ee = performance.now(),
								Ie = await __import(this.data.entrypoint.path);
							if (
								(this.l("Imported renderer", {
									duration: `${performance.now() - Ee}ms`,
								}),
								!Ie)
							)
								return;
							(this.g = await Ie.activate(this.h())),
								this.l("Activated renderer", {
									duration: `${performance.now() - Ee}ms`,
								});
							const Be = w.rendererData.filter(
								(Se) => Se.entrypoint.extends === this.data.id,
							);
							return (
								Be.length &&
									this.l("Activating dependant renderers", {
										dependents: Be.map((Se) => Se.id).join(", "),
									}),
								await Promise.all(
									Be.map(async (Se) => {
										const ke = be.getRenderer(Se.id);
										if (!ke)
											throw new Error(
												`Could not find extending renderer: ${Se.id}`,
											);
										try {
											return await ke.j();
										} catch (Ue) {
											console.error(Ue),
												this.l("Activating dependant renderer failed", {
													dependent: Se.id,
													error: Ue + "",
												});
											return;
										}
									}),
								),
								this.g
							);
						} catch (Ee) {
							throw (this.l("Loading renderer failed"), Ee);
						}
					}
					l(Ee, Ie) {
						He("logRendererDebugMessage", {
							message: `[renderer ${this.data.id}] - ${Ee}`,
							data: Ie,
						});
					}
				}
				const ve = new (class {
						constructor() {
							this.c = new Map();
						}
						waitFor(Te) {
							return (
								this.c.get(Te) ||
								Promise.resolve(new Error(`Preload not ready: ${Te}`))
							);
						}
						load(Te) {
							const Ee = Promise.all([D(Te), this.waitForAllCurrent()]);
							return this.c.set(Te, Ee), Ee;
						}
						waitForAllCurrent() {
							return Promise.all(
								[...this.c.values()].map((Te) => Te.catch((Ee) => Ee)),
							);
						}
					})(),
					ge = new (class {
						constructor() {
							(this.c = new Map()), (this.f = new Map());
						}
						enqueue(Te, Ee) {
							this.f.get(Te)?.dispose(), this.f.delete(Te);
							const Ie = this.c.get(Te);
							if (Ie)
								Ie.queue = Ie.queue.then(async (Be) => {
									Ie.abort.signal.aborted || (await Ee(Ie.abort.signal));
								});
							else {
								const Be = new AbortController();
								this.c.set(Te, {
									abort: Be,
									queue: new Promise((Se) => Se(Ee(Be.signal))),
								});
							}
						}
						enqueueIdle(Te, Ee) {
							this.f.get(Te)?.dispose(),
								ge.f.set(
									Te,
									o(() => {
										ge.enqueue(Te, Ee), ge.f.delete(Te);
									}),
								);
						}
						cancelAll() {
							this.f.forEach((Te) => Te.dispose()), this.f.clear();
							for (const { abort: Te } of this.c.values()) Te.abort();
							this.c.clear();
						}
						cancelOutput(Te) {
							this.f.get(Te)?.dispose(), this.f.delete(Te);
							const Ee = this.c.get(Te);
							Ee && (Ee.abort.abort(), this.c.delete(Te));
						}
					})(),
					be = new (class {
						constructor() {
							this.c = new Map();
							for (const Te of w.rendererData) this.g(Te);
						}
						getRenderer(Te) {
							return this.c.get(Te);
						}
						f(Te, Ee) {
							if (
								Te.id !== Ee.id ||
								Te.entrypoint.path !== Ee.entrypoint.path ||
								Te.entrypoint.extends !== Ee.entrypoint.extends ||
								Te.messaging !== Ee.messaging ||
								Te.mimeTypes.length !== Ee.mimeTypes.length
							)
								return !1;
							for (let Ie = 0; Ie < Te.mimeTypes.length; Ie++)
								if (Te.mimeTypes[Ie] !== Ee.mimeTypes[Ie]) return !1;
							return !0;
						}
						updateRendererData(Te) {
							const Ee = new Set(this.c.keys()),
								Ie = new Set(Te.map((Be) => Be.id));
							for (const Be of Te) {
								const Se = this.c.get(Be.id);
								(Se && this.f(Se.data, Be)) || this.g(Be);
							}
							for (const Be of Ee) Ie.has(Be) || this.c.delete(Be);
						}
						g(Te) {
							this.c.set(Te.id, new me(Te));
						}
						clearAll() {
							ge.cancelAll();
							for (const Te of this.c.values()) Te.disposeOutputItem();
						}
						clearOutput(Te, Ee) {
							ge.cancelOutput(Ee), this.c.get(Te)?.disposeOutputItem(Ee);
						}
						async render(Te, Ee, Ie, Be) {
							const Se = this.j(Ee, Te);
							if (!Se) {
								const Ue = (
									window.document.documentElement.style.getPropertyValue(
										"--notebook-cell-renderer-not-found-error",
									) || ""
								).replace("$0", () => Te.mime);
								this.k(Te, Ie, Ue);
								return;
							}
							if (!(await this.h(Te, Ie, Se, Be)).continue) return;
							for (const Ue of Te._allOutputItems) {
								if (Ue.mime === Te.mime) continue;
								const qe = await Ue.getItem();
								if (Be.aborted) return;
								if (qe) {
									const Ae = this.j(void 0, qe);
									if (Ae && !(await this.h(qe, Ie, Ae, Be)).continue) return;
								}
							}
							const ke = (
								window.document.documentElement.style.getPropertyValue(
									"--notebook-cell-renderer-fallbacks-exhausted",
								) || ""
							).replace("$0", () => Te.mime);
							this.k(Te, Ie, ke);
						}
						async h(Te, Ee, Ie, Be) {
							try {
								return await Ie.renderOutputItem(Te, Ee, Be), { continue: !1 };
							} catch (Se) {
								if (Be.aborted) return { continue: !1 };
								if (Se instanceof Error && Se.name === fe)
									return { continue: !0 };
								throw Se;
							}
						}
						j(Te, Ee) {
							let Ie;
							if (typeof Te == "string")
								Ie = Array.from(this.c.values()).find(
									(Be) => Be.data.id === Te,
								);
							else {
								const Be = Array.from(this.c.values()).filter(
									(Se) =>
										Se.data.mimeTypes.includes(Ee.mime) &&
										!Se.data.entrypoint.extends,
								);
								Be.length &&
									(Be.sort((Se, ke) => +Se.data.isBuiltin - +ke.data.isBuiltin),
									(Ie = Be[0]));
							}
							return Ie;
						}
						k(Te, Ee, Ie) {
							const Be = document.createElement("div"),
								Se = document.createElement("div");
							(Se.className = "no-renderer-error"), (Se.innerText = Ie);
							const ke = document.createElement("div");
							(ke.innerText = Te.text()),
								Be.appendChild(Se),
								Be.appendChild(ke),
								(Ee.innerText = ""),
								Ee.appendChild(Be);
						}
					})(),
					Ce = new (class {
						constructor() {
							(this.c = new Map()), (this.f = new Map());
						}
						clearAll() {
							for (const Ee of this.c.values()) Ee.dispose();
							this.c.clear();
							for (const Ee of this.f.values()) Ee.dispose();
							this.f.clear();
						}
						async g(Ee, Ie, Be) {
							const Se = this.c.get(Ee.cellId);
							if (Se)
								return (
									console.error(
										`Trying to create markup that already exists: ${Ee.cellId}`,
									),
									Se
								);
							const ke = new Fe(
								Ee.cellId,
								Ee.mime,
								Ee.content,
								Ie,
								Ee.metadata,
							);
							return (
								(ke.element.style.visibility = Be ? "" : "hidden"),
								this.c.set(Ee.cellId, ke),
								await ke.ready,
								ke
							);
						}
						async ensureMarkupCell(Ee) {
							let Ie = this.c.get(Ee.cellId);
							Ie
								? ((Ie.element.style.visibility = Ee.visible ? "" : "hidden"),
									await Ie.updateContentAndRender(Ee.content, Ee.metadata))
								: (Ie = await this.g(Ee, Ee.offset, Ee.visible));
						}
						deleteMarkupCell(Ee) {
							const Ie = this.h(Ee);
							Ie && (Ie.remove(), Ie.dispose(), this.c.delete(Ee));
						}
						async updateMarkupContent(Ee, Ie, Be) {
							await this.h(Ee)?.updateContentAndRender(Ie, Be);
						}
						showMarkupCell(Ee, Ie, Be, Se) {
							this.h(Ee)?.show(Ie, Be, Se);
						}
						hideMarkupCell(Ee) {
							this.h(Ee)?.hide();
						}
						unhideMarkupCell(Ee) {
							this.h(Ee)?.unhide();
						}
						h(Ee) {
							const Ie = this.c.get(Ee);
							if (!Ie) {
								console.log(`Could not find markup cell '${Ee}'`);
								return;
							}
							return Ie;
						}
						updateSelectedCells(Ee) {
							const Ie = new Set(Ee);
							for (const Be of this.c.values()) Be.setSelected(Ie.has(Be.id));
						}
						toggleDragDropEnabled(Ee) {
							for (const Ie of this.c.values()) Ie.toggleDragDropEnabled(Ee);
						}
						updateMarkupScrolls(Ee) {
							for (const { id: Ie, top: Be } of Ee) {
								const Se = this.c.get(Ie);
								Se && (Se.element.style.top = `${Be}px`);
							}
						}
						async renderOutputCell(Ee, Ie) {
							const Be = await Promise.all(
								Ee.requiredPreloads.map((ke) =>
									ve.waitFor(ke.uri).then(
										() => {},
										(Ue) => Ue,
									),
								),
							);
							return Ie.aborted
								? void 0
								: this.ensureOutputCell(
										Ee.cellId,
										Ee.cellTop,
										!1,
									).renderOutputElement(Ee, Be, Ie);
						}
						ensureOutputCell(Ee, Ie, Be) {
							let Se = this.f.get(Ee);
							const ke = !!Se;
							return (
								Se || ((Se = new Oe(Ee)), this.f.set(Ee, Se)),
								(ke && Be) || (Se.element.style.top = Ie + "px"),
								Se
							);
						}
						clearOutput(Ee, Ie, Be) {
							this.f.get(Ee)?.clearOutput(Ie, Be);
						}
						showOutput(Ee, Ie, Be) {
							this.f.get(Ee)?.show(Ie, Be);
						}
						updateAndRerender(Ee, Ie, Be) {
							this.f.get(Ee)?.updateContentAndRerender(Ie, Be);
						}
						hideOutput(Ee) {
							this.f.get(Ee)?.hide();
						}
						updateOutputHeight(Ee, Ie, Be) {
							this.f.get(Ee)?.updateOutputHeight(Ie, Be);
						}
						updateOutputsScroll(Ee) {
							for (const Ie of Ee) this.f.get(Ie.cellId)?.updateScroll(Ie);
						}
					})();
				class Le {
					static {
						this.c = new Map();
					}
					static highlightCodeBlock(Ee, Ie) {
						const Be = Le.c.get(Ee);
						if (!Be) return;
						const Se = _?.createHTML(Ie) ?? Ie;
						Be.innerHTML = Se;
						const ke = Be.getRootNode();
						ke instanceof ShadowRoot &&
							(ke.adoptedStyleSheets.includes(p) ||
								ke.adoptedStyleSheets.push(p));
					}
					static requestHighlightCodeBlock(Ee) {
						const Ie = [];
						let Be = 0;
						for (const Se of Ee.querySelectorAll(".vscode-code-block")) {
							const ke = Se.getAttribute("data-vscode-code-block-lang");
							if (Se.textContent && ke) {
								const Ue = `${Date.now()}-${Be++}`;
								Ie.push({ value: Se.textContent, lang: ke, id: Ue }),
									Le.c.set(Ue, Se);
							}
						}
						return Ie;
					}
				}
				class Fe {
					constructor(Ee, Ie, Be, Se, ke) {
						this.g = !1;
						const Ue = this;
						(this.id = Ee), (this.f = { value: Be, version: 0, metadata: ke });
						const { promise: qe, resolve: Ae, reject: Me } = r();
						this.ready = qe;
						let De;
						this.c = Object.freeze({
							id: Ee,
							mime: Ie,
							get metadata() {
								return Ue.f.metadata;
							},
							text: () => this.f.value,
							json: () => {},
							data: () => {
								if (De?.version === this.f.version) return De.value;
								const Ve = d.encode(this.f.value);
								return (De = { version: this.f.version, value: Ve }), Ve;
							},
							blob() {
								return new Blob([this.data()], { type: this.mime });
							},
							_allOutputItems: [{ mime: Ie, getItem: async () => this.c }],
						});
						const Re = window.document.getElementById("container"),
							je = document.createElement("div");
						(je.className = "markup"),
							(je.style.position = "absolute"),
							(je.style.width = "100%"),
							(this.element = document.createElement("div")),
							(this.element.id = this.id),
							this.element.classList.add("preview"),
							(this.element.style.position = "absolute"),
							(this.element.style.top = Se + "px"),
							this.toggleDragDropEnabled(u.dragAndDropEnabled),
							je.appendChild(this.element),
							Re.appendChild(je),
							this.j(),
							this.updateContentAndRender(this.f.value, this.f.metadata).then(
								() => {
									this.g || R.observe(this.element, this.id, !1, this.id), Ae();
								},
								() => Me(),
							);
					}
					dispose() {
						(this.g = !0), this.h?.abort(), (this.h = void 0);
					}
					j() {
						this.element.addEventListener("dblclick", () => {
							He("toggleMarkupPreview", { cellId: this.id });
						}),
							this.element.addEventListener("click", (Ee) => {
								He("clickMarkupCell", {
									cellId: this.id,
									altKey: Ee.altKey,
									ctrlKey: Ee.ctrlKey,
									metaKey: Ee.metaKey,
									shiftKey: Ee.shiftKey,
								});
							}),
							this.element.addEventListener("contextmenu", (Ee) => {
								He("contextMenuMarkupCell", {
									cellId: this.id,
									clientX: Ee.clientX,
									clientY: Ee.clientY,
								});
							}),
							this.element.addEventListener("mouseenter", () => {
								He("mouseEnterMarkupCell", { cellId: this.id });
							}),
							this.element.addEventListener("mouseleave", () => {
								He("mouseLeaveMarkupCell", { cellId: this.id });
							}),
							this.element.addEventListener("dragstart", (Ee) => {
								Je.startDrag(Ee, this.id);
							}),
							this.element.addEventListener("drag", (Ee) => {
								Je.updateDrag(Ee, this.id);
							}),
							this.element.addEventListener("dragend", (Ee) => {
								Je.endDrag(Ee, this.id);
							});
					}
					async updateContentAndRender(Ee, Ie) {
						(this.f = { value: Ee, version: this.f.version + 1, metadata: Ie }),
							this.h?.abort();
						const Be = new AbortController();
						this.h = Be;
						try {
							await be.render(this.c, void 0, this.element, this.h.signal);
						} finally {
							this.h === Be && (this.h = void 0);
						}
						const Se = this.element.shadowRoot ?? this.element,
							ke = [];
						for (const qe of Se.children)
							switch (qe.tagName) {
								case "LINK":
								case "SCRIPT":
								case "STYLE":
									break;
								default:
									ke.push(qe.outerHTML);
									break;
							}
						const Ue = Le.requestHighlightCodeBlock(Se);
						He("renderedMarkup", {
							cellId: this.id,
							html: ke.join(""),
							codeBlocks: Ue,
						}),
							N.updateHeight(this.id, this.element.offsetHeight, {
								isOutput: !1,
							});
					}
					show(Ee, Ie, Be) {
						(this.element.style.visibility = ""),
							(this.element.style.top = `${Ee}px`),
							typeof Ie == "string" || Be
								? this.updateContentAndRender(
										Ie ?? this.f.value,
										Be ?? this.f.metadata,
									)
								: this.k();
					}
					hide() {
						this.element.style.visibility = "hidden";
					}
					unhide() {
						(this.element.style.visibility = ""), this.k();
					}
					remove() {
						this.element.remove();
					}
					async k() {
						N.updateHeight(this.id, this.element.offsetHeight, {
							isOutput: !1,
						});
					}
					setSelected(Ee) {
						this.element.classList.toggle("selected", Ee);
					}
					toggleDragDropEnabled(Ee) {
						Ee
							? (this.element.classList.add("draggable"),
								this.element.setAttribute("draggable", "true"))
							: (this.element.classList.remove("draggable"),
								this.element.removeAttribute("draggable"));
					}
				}
				class Oe {
					constructor(Ee) {
						this.c = new Map();
						const Ie = window.document.getElementById("container"),
							Be = V(Ee);
						Ie.appendChild(Be),
							(this.element = document.createElement("div")),
							(this.element.style.position = "absolute"),
							(this.element.style.outline = "0"),
							(this.element.id = Ee),
							this.element.classList.add("cell_container"),
							Ie.appendChild(this.element),
							(this.element = this.element);
						const Se = V(Ee, !0);
						Ie.appendChild(Se);
					}
					dispose() {
						for (const Ee of this.c.values()) Ee.dispose();
						this.c.clear();
					}
					f(Ee) {
						let Ie = this.c.get(Ee.outputId);
						return (
							Ie ||
								((Ie = new xe(Ee.outputId)),
								this.element.appendChild(Ie.element),
								this.c.set(Ee.outputId, Ie)),
							Ie.createOutputElement(
								Ee.outputId,
								Ee.outputOffset,
								Ee.left,
								Ee.cellId,
							)
						);
					}
					async renderOutputElement(Ee, Ie, Be) {
						const Se = Date.now(),
							ke = this.f(Ee);
						if (
							(await ke.render(Ee.content, Ee.rendererId, Ie, Be),
							(ke.element.style.visibility = Ee.initiallyHidden
								? "hidden"
								: ""),
							Ee.executionId && Ee.rendererId)
						) {
							let Ue, qe;
							Ee.content.type === 1 &&
								((Ue = Ee.content.output.valueBytes.length),
								(qe = Ee.content.output.mime)),
								He("notebookPerformanceMessage", {
									cellId: Ee.cellId,
									executionId: Ee.executionId,
									duration: Date.now() - Se,
									rendererId: Ee.rendererId,
									outputSize: Ue,
									mimeType: qe,
								});
						}
					}
					clearOutput(Ee, Ie) {
						const Be = this.c.get(Ee);
						Be?.clear(Ie), Be?.dispose(), this.c.delete(Ee);
					}
					show(Ee, Ie) {
						this.c.get(Ee) &&
							((this.element.style.visibility = ""),
							(this.element.style.top = `${Ie}px`));
					}
					hide() {
						this.element.style.visibility = "hidden";
					}
					updateContentAndRerender(Ee, Ie) {
						this.c.get(Ee)?.updateContentAndRender(Ie);
					}
					updateOutputHeight(Ee, Ie) {
						this.c.get(Ee)?.updateHeight(Ie);
					}
					updateScroll(Ee) {
						this.element.style.top = `${Ee.cellTop}px`;
						const Ie = this.c.get(Ee.outputId);
						Ie &&
							(Ie.updateScroll(Ee.outputOffset),
							Ee.forceDisplay &&
								Ie.outputNode &&
								(Ie.outputNode.element.style.visibility = "")),
							Ee.forceDisplay && (this.element.style.visibility = "");
					}
				}
				class xe {
					get outputNode() {
						return this.c;
					}
					constructor(Ee) {
						(this.f = Ee),
							(this.element = document.createElement("div")),
							this.element.classList.add("output_container"),
							this.element.setAttribute(
								"data-vscode-context",
								JSON.stringify({ preventDefaultContextMenuItems: !0 }),
							),
							(this.element.style.position = "absolute"),
							(this.element.style.overflow = "hidden");
					}
					dispose() {
						this.c?.dispose();
					}
					clear(Ee) {
						Ee && be.clearOutput(Ee, this.f), this.element.remove();
					}
					updateHeight(Ee) {
						(this.element.style.maxHeight = `${Ee}px`),
							(this.element.style.height = `${Ee}px`);
					}
					updateScroll(Ee) {
						this.element.style.top = `${Ee}px`;
					}
					createOutputElement(Ee, Ie, Be, Se) {
						return (
							(this.element.innerText = ""),
							(this.element.style.maxHeight = "0px"),
							(this.element.style.top = `${Ie}px`),
							this.c?.dispose(),
							(this.c = new Ke(Ee, Be, Se)),
							this.element.appendChild(this.c.element),
							this.c
						);
					}
					updateContentAndRender(Ee) {
						this.c?.updateAndRerender(Ee);
					}
				}
				g.postMessage({ __vscode_notebook_message: !0, type: "initialized" });
				for (const Te of w.staticPreloadsData) ve.load(Te.entrypoint);
				function He(Te, Ee) {
					g.postMessage({ __vscode_notebook_message: !0, type: Te, ...Ee });
				}
				class Ke {
					constructor(Ee, Ie, Be) {
						(this.h = Ee),
							(this.cellId = Be),
							(this.f = !1),
							(this.element = document.createElement("div")),
							(this.element.id = Ee),
							this.element.classList.add("output"),
							(this.element.style.position = "absolute"),
							(this.element.style.top = "0px"),
							(this.element.style.left = Ie + "px"),
							(this.element.style.padding = `${w.style.outputNodePadding}px ${w.style.outputNodePadding}px ${w.style.outputNodePadding}px ${w.style.outputNodeLeftPadding}`),
							this.element.addEventListener("mouseenter", () => {
								He("mouseenter", { id: Ee });
							}),
							this.element.addEventListener("mouseleave", () => {
								He("mouseleave", { id: Ee });
							});
					}
					dispose() {
						this.g?.abort(), (this.g = void 0);
					}
					async render(Ee, Ie, Be, Se) {
						if (
							(this.g?.abort(),
							(this.g = void 0),
							(this.c = { preferredRendererId: Ie, preloadErrors: Be }),
							Ee.type === 0)
						) {
							const Re = _?.createHTML(Ee.htmlContent) ?? Ee.htmlContent;
							this.element.innerHTML = Re;
						} else if (Be.some((Re) => Re instanceof Error)) {
							const Re = Be.filter((je) => je instanceof Error);
							X("Error loading preloads", this.element, Re);
						} else {
							const Re = ne(
									this.h,
									Ee.output.mime,
									Ee.metadata,
									Ee.output.valueBytes,
									Ee.allOutputs,
									Ee.output.appended,
								),
								je = new AbortController();
							(this.g = je), Se?.addEventListener("abort", () => je.abort());
							try {
								await be.render(Re, Ie, this.element, je.signal);
							} finally {
								this.g === je && (this.g = void 0);
							}
						}
						this.f ||
							((this.f = !0), R.observe(this.element, this.h, !0, this.cellId));
						const ke = this.element.offsetHeight,
							Ue = document.defaultView.getComputedStyle(this.element),
							qe = parseFloat(Ue.paddingTop) + parseFloat(Ue.paddingBottom),
							Ae = ke - qe;
						A(Ae) && Ue.padding === "0px"
							? (N.updateHeight(this.h, ke + w.style.outputNodePadding * 2, {
									isOutput: !0,
									init: !0,
								}),
								(this.element.style.padding = `${w.style.outputNodePadding}px ${w.style.outputNodePadding}px ${w.style.outputNodePadding}px ${w.style.outputNodeLeftPadding}`))
							: A(Ae)
								? (N.updateHeight(this.h, this.element.offsetHeight, {
										isOutput: !0,
										init: !0,
									}),
									(this.element.style.padding = `0 ${w.style.outputNodePadding}px 0 ${w.style.outputNodeLeftPadding}`))
								: N.updateHeight(this.h, 0, { isOutput: !0, init: !0 });
						const Me = this.element.shadowRoot ?? this.element,
							De = Le.requestHighlightCodeBlock(Me);
						De.length > 0 && He("renderedCellOutput", { codeBlocks: De });
					}
					updateAndRerender(Ee) {
						this.c &&
							this.render(Ee, this.c.preferredRendererId, this.c.preloadErrors);
					}
				}
				const Je = new (class {
					constructor() {
						window.document.addEventListener("dragover", (Ee) => {
							Ee.preventDefault();
						}),
							window.document.addEventListener("drop", (Ee) => {
								Ee.preventDefault();
								const Ie = this.c;
								Ie &&
									((this.c = void 0),
									He("cell-drop", {
										cellId: Ie.cellId,
										ctrlKey: Ee.ctrlKey,
										altKey: Ee.altKey,
										dragOffsetY: Ee.clientY,
									}));
							});
					}
					startDrag(Ee, Ie) {
						if (!Ee.dataTransfer || !u.dragAndDropEnabled) return;
						this.c = { cellId: Ie, clientY: Ee.clientY };
						const Be = 9999;
						this.f ||
							((this.f = document.createElement("div")),
							(this.f.style.position = "absolute"),
							(this.f.style.top = "0"),
							(this.f.style.left = "0"),
							(this.f.style.zIndex = `${Be}`),
							(this.f.style.width = "100%"),
							(this.f.style.height = "100%"),
							(this.f.style.background = "transparent"),
							window.document.body.appendChild(this.f)),
							(Ee.target.style.zIndex = `${Be + 1}`),
							Ee.target.classList.add("dragging"),
							He("cell-drag-start", { cellId: Ie, dragOffsetY: Ee.clientY });
						const Se = () => {
							this.c?.cellId === Ie &&
								(He("cell-drag", { cellId: Ie, dragOffsetY: this.c.clientY }),
								window.requestAnimationFrame(Se));
						};
						window.requestAnimationFrame(Se);
					}
					updateDrag(Ee, Ie) {
						Ie !== this.c?.cellId
							? (this.c = void 0)
							: (this.c = { cellId: Ie, clientY: Ee.clientY });
					}
					endDrag(Ee, Ie) {
						(this.c = void 0),
							Ee.target.classList.remove("dragging"),
							He("cell-drag-end", { cellId: Ie }),
							this.f && (this.f.remove(), (this.f = void 0)),
							(Ee.target.style.zIndex = "");
					}
				})();
			}
			function i(w, E, C, d, m, r, u) {
				return `
		const __import = (x) => import(x);
		(${t})(
			JSON.parse(decodeURIComponent("${encodeURIComponent(JSON.stringify({ style: w, options: E, renderOptions: C, rendererData: d, staticPreloadsData: m, isWorkspaceTrusted: r, nonce: u }))}"))
		)
//# sourceURL=notebookWebviewPreloads.js
`;
			}
		}),
		