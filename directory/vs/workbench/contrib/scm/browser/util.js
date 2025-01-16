define(
			de[614],
			he([1, 0, 54, 11, 50, 92, 24, 198, 182, 7, 1171]),
			function (ce, e, t, i, w, E, C, d, m, r, u) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$FPc = void 0),
					(e.$mPc = a),
					(e.$nPc = h),
					(e.$oPc = c),
					(e.$pPc = n),
					(e.$qPc = g),
					(e.$rPc = p),
					(e.$sPc = o),
					(e.$tPc = f),
					(e.$uPc = b),
					(e.$vPc = s),
					(e.$wPc = l),
					(e.$xPc = y),
					(e.$yPc = $),
					(e.$zPc = v),
					(e.$APc = S),
					(e.$BPc = I),
					(e.$CPc = P),
					(e.$DPc = k),
					(e.$EPc = L),
					(e.$GPc = N),
					(e.$HPc = A),
					(e.$IPc = R),
					(t = mt(t));
				function a(O) {
					return Array.isArray(O) && O.every((B) => c(B));
				}
				function h(O) {
					return (
						Array.isArray(O.repositories) &&
						Array.isArray(O.visibleRepositories)
					);
				}
				function c(O) {
					return !!O.provider && !!O.input;
				}
				function n(O) {
					return !!O.validateInput && typeof O.value == "string";
				}
				function g(O) {
					return O.type === "actionButton";
				}
				function p(O) {
					return !!O.provider && !!O.resources;
				}
				function o(O) {
					return !!O.sourceUri && p(O.resourceGroup);
				}
				function f(O) {
					return u.$06.isResourceNode(O) && p(O.context);
				}
				function b(O) {
					return O.type === "historyItemGroup";
				}
				function s(O) {
					return O.type === "allChanges" || O.type === "historyItem";
				}
				function l(O) {
					return O.type === "historyItem2";
				}
				function y(O) {
					return O.type === "historyItemLoadMore";
				}
				function $(O) {
					return O.type === "historyItemChange";
				}
				function v(O) {
					return u.$06.isResourceNode(O) && s(O.context);
				}
				function S(O) {
					return O.type === "separator";
				}
				function I(O, B, U) {
					const z = t.$sc(O.fsPath),
						F = JSON.parse(B.query),
						x = JSON.parse(U.query),
						H = F.ref.substring(0, 8).concat(F.ref.endsWith("^") ? "^" : ""),
						q = x.ref.substring(0, 8).concat(x.ref.endsWith("^") ? "^" : "");
					return [B, U, `${z} (${H}) \u2194 ${z} (${q})`, null];
				}
				const T = (O, B) =>
					O instanceof i.$2X && B instanceof i.$2X
						? O.id === B.id &&
							O.enabled === B.enabled &&
							O.hideActions?.isHidden === B.hideActions?.isHidden
						: O.id === B.id && O.enabled === B.enabled;
				function P(O, B, U) {
					let z = [],
						F = [];
					const x = () => {
						const H = [],
							q = [];
						(0, E.$Kyb)(
							O,
							{ shouldForwardArgs: !0 },
							{ primary: H, secondary: q },
							U,
						),
							!((0, C.$yb)(z, H, T) && (0, C.$yb)(F, q, T)) &&
								((z = H), (F = q), B(H, q));
					};
					return x(), O.onDidChange(x);
				}
				function k(O, B) {
					return P(
						O,
						(U) => {
							B.clear(), B.push(U, { icon: !0, label: !1 });
						},
						"inline",
					);
				}
				function L(O) {
					const B = [],
						U = [];
					return (
						(0, E.$Jyb)(
							O,
							{ shouldForwardArgs: !0 },
							{ primary: B, secondary: U },
							"inline",
						),
						U
					);
				}
				class D extends w.$rj {
					constructor(B, U) {
						super(`statusbaraction{${B.id}}`, B.title, "", !0),
							(this.c = B),
							(this.f = U),
							(this.tooltip = B.tooltip || "");
					}
					run() {
						return this.f.executeCommand(
							this.c.id,
							...(this.c.arguments || []),
						);
					}
				}
				e.$FPc = D;
				class M extends d.$_ib {
					constructor(B, U) {
						super(null, B, { ...U, icon: !1, label: !0 });
					}
					u() {
						this.m.label &&
							this.I &&
							(0, r.$hhb)(this.I, ...(0, m.$Sib)(this.action.label));
					}
				}
				function N(O) {
					return (B, U) =>
						B instanceof D ? new M(B, U) : (0, E.$Pyb)(O, B, U);
				}
				function A(O) {
					return `${O.contextValue}:${O.label}${O.rootUri ? `:${O.rootUri.toString()}` : ""}`;
				}
				function R(O) {
					return O.groups.reduce((B, U) => B + U.resources.length, 0);
				}
			},
		),
		