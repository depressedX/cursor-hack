define(de[923], he([1, 0, 164, 304, 164]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.ListNode = e.ListItemNode = void 0),
				(e.invariant = E),
				(e.$setListItemThemeClassNames = d),
				(e.updateListItemChecked = m),
				(e.convertListItemElement = r),
				(e.$createListItemNode = u),
				(e.$isListItemNode = a),
				(e.setListThemeClassNames = c),
				(e.normalizeChildren = n),
				(e.convertListNode = g),
				(e.$createListNode = o),
				(e.$isListNode = f),
				(e.$getListDepth = b),
				(e.$getTopListNode = s),
				(e.$isLastItemInList = l),
				(e.$getAllListItems = y),
				(e.isNestedListNode = $),
				(e.findNearestListItemNode = v),
				(e.$removeHighestEmptyListParent = S),
				(e.wrapInListItem = I),
				(e.$isSelectingEmptyListItem = T),
				(e.$getListItemValue = P),
				(e.insertList = k),
				(e.append = L),
				(e.createListOrMerge = D),
				(e.mergeLists = M),
				(e.removeList = N),
				(e.updateChildrenListItemValue = A),
				(e.$handleIndent = R),
				(e.$handleOutdent = O),
				(e.$handleListInsertParagraph = B);
			function E(U, z, ...F) {
				if (!U) throw new Error(z);
			}
			class C extends w.ElementNode {
				static getType() {
					return "listitem";
				}
				static clone(z) {
					return new C(z.__value, z.__checked, z.__key);
				}
				constructor(z, F, x) {
					super(x), (this.__value = z === void 0 ? 1 : z), (this.__checked = F);
				}
				createDOM(z) {
					const F = document.createElement("li"),
						x = this.getParent();
					return (
						f(x) && x.getListType() === "check" && m(F, this, null, x),
						(F.value = this.__value),
						d(F, z.theme, this),
						F
					);
				}
				updateDOM(z, F, x) {
					const H = this.getParent();
					return (
						f(H) && H.getListType() === "check" && m(F, this, z, H),
						(F.value = this.__value),
						d(F, x.theme, this),
						!1
					);
				}
				static transform() {
					return (z) => {
						const F = z.getParent();
						f(F) &&
							(A(F),
							F.getListType() !== "check" &&
								z.getChecked() != null &&
								z.setChecked(void 0));
					};
				}
				static importDOM() {
					return { li: (z) => ({ conversion: r, priority: 0 }) };
				}
				static importJSON(z) {
					const F = new C(z.value, z.checked);
					return F.setFormat(z.format), F.setDirection(z.direction), F;
				}
				exportJSON() {
					return {
						...super.exportJSON(),
						checked: this.getChecked(),
						type: "listitem",
						value: this.getValue(),
						version: 1,
					};
				}
				append(...z) {
					for (let F = 0; F < z.length; F++) {
						const x = z[F];
						if ((0, w.$isElementNode)(x) && this.canMergeWith(x)) {
							const H = x.getChildren();
							this.append(...H), x.remove();
						} else super.append(x);
					}
					return this;
				}
				replace(z, F) {
					if (a(z)) return super.replace(z);
					this.setIndent(0);
					const x = this.getParentOrThrow();
					if (!f(x)) return z;
					if (x.__first === this.getKey()) x.insertBefore(z);
					else if (x.__last === this.getKey()) x.insertAfter(z);
					else {
						const H = o(x.getListType());
						let q = this.getNextSibling();
						for (; q; ) {
							const V = q;
							(q = q.getNextSibling()), H.append(V);
						}
						x.insertAfter(z), z.insertAfter(H);
					}
					return (
						F &&
							this.getChildren().forEach((H) => {
								z.append(H);
							}),
						this.remove(),
						x.getChildrenSize() === 0 && x.remove(),
						z
					);
				}
				insertAfter(z, F = !0) {
					const x = this.getParentOrThrow();
					f(x) ||
						E(!1, "insertAfter: list node is not parent of list item node");
					const H = this.getNextSiblings();
					if (a(z)) {
						const q = super.insertAfter(z, F),
							V = z.getParentOrThrow();
						return f(V) && A(V), q;
					}
					if (f(z)) {
						let q = z;
						const V = z.getChildren();
						for (let G = V.length - 1; G >= 0; G--)
							(q = V[G]), this.insertAfter(q, F);
						return q;
					}
					if ((x.insertAfter(z, F), H.length !== 0)) {
						const q = o(x.getListType());
						H.forEach((V) => q.append(V)), z.insertAfter(q, F);
					}
					return z;
				}
				remove(z) {
					const F = this.getPreviousSibling(),
						x = this.getNextSibling();
					if ((super.remove(z), F && x && $(F) && $(x)))
						M(F.getFirstChild(), x.getFirstChild()), x.remove();
					else if (x) {
						const H = x.getParent();
						f(H) && A(H);
					}
				}
				insertNewAfter(z, F = !0) {
					const x = u(this.__checked == null ? void 0 : !1);
					return this.insertAfter(x, F), x;
				}
				collapseAtStart(z) {
					const F = (0, w.$createParagraphNode)();
					this.getChildren().forEach((G) => F.append(G));
					const H = this.getParentOrThrow(),
						q = H.getParentOrThrow(),
						V = a(q);
					if (H.getChildrenSize() === 1)
						if (V) H.remove(), q.select();
						else {
							H.insertBefore(F), H.remove();
							const G = z.anchor,
								K = z.focus,
								J = F.getKey();
							G.type === "element" &&
								G.getNode().is(this) &&
								G.set(J, G.offset, "element"),
								K.type === "element" &&
									K.getNode().is(this) &&
									K.set(J, K.offset, "element");
						}
					else H.insertBefore(F), this.remove();
					return !0;
				}
				getValue() {
					return this.getLatest().__value;
				}
				setValue(z) {
					const F = this.getWritable();
					F.__value = z;
				}
				getChecked() {
					return this.getLatest().__checked;
				}
				setChecked(z) {
					const F = this.getWritable();
					F.__checked = z;
				}
				toggleChecked() {
					this.setChecked(!this.__checked);
				}
				getIndent() {
					const z = this.getParent();
					if (z === null) return this.getLatest().__indent;
					let F = z.getParentOrThrow(),
						x = 0;
					for (; a(F); ) (F = F.getParentOrThrow().getParentOrThrow()), x++;
					return x;
				}
				setIndent(z) {
					E(typeof z == "number" && z > -1, "Invalid indent value.");
					let F = this.getIndent();
					for (; F !== z; ) F < z ? (R(this), F++) : (O(this), F--);
					return this;
				}
				insertBefore(z) {
					if (a(z)) {
						const F = this.getParentOrThrow();
						if (f(F)) {
							const x = this.getNextSiblings();
							A(F, x);
						}
					}
					return super.insertBefore(z);
				}
				canInsertAfter(z) {
					return a(z);
				}
				canReplaceWith(z) {
					return a(z);
				}
				canMergeWith(z) {
					return (0, w.$isParagraphNode)(z) || a(z);
				}
				extractWithChild(z, F) {
					if (!(0, w.$isRangeSelection)(F)) return !1;
					const x = F.anchor.getNode(),
						H = F.focus.getNode();
					return (
						this.isParentOf(x) &&
						this.isParentOf(H) &&
						this.getTextContent().length === F.getTextContent().length
					);
				}
				isParentRequired() {
					return !0;
				}
				createParentElementNode() {
					return o("bullet");
				}
			}
			e.ListItemNode = C;
			function d(U, z, F) {
				const x = [],
					H = [],
					q = z.list,
					V = q ? q.listitem : void 0;
				let G;
				if ((q && q.nested && (G = q.nested.listitem), V !== void 0)) {
					const K = V.split(" ");
					x.push(...K);
				}
				if (q) {
					const K = F.getParent(),
						J = f(K) && K.getListType() === "check",
						W = F.getChecked();
					(!J || W) && H.push(q.listitemUnchecked),
						(!J || !W) && H.push(q.listitemChecked),
						J && x.push(W ? q.listitemChecked : q.listitemUnchecked);
				}
				if (G !== void 0) {
					const K = G.split(" ");
					F.getChildren().some((J) => f(J)) ? x.push(...K) : H.push(...K);
				}
				H.length > 0 && (0, i.removeClassNamesFromElement)(U, ...H),
					x.length > 0 && (0, i.addClassNamesToElement)(U, ...x);
			}
			function m(U, z, F, x) {
				f(z.getFirstChild())
					? (U.removeAttribute("role"),
						U.removeAttribute("tabIndex"),
						U.removeAttribute("aria-checked"))
					: (U.setAttribute("role", "checkbox"),
						U.setAttribute("tabIndex", "-1"),
						(!F || z.__checked !== F.__checked) &&
							U.setAttribute(
								"aria-checked",
								z.getChecked() ? "true" : "false",
							));
			}
			function r(U) {
				const z =
					(0, i.isHTMLElement)(U) && U.getAttribute("aria-checked") === "true";
				return { node: u(z) };
			}
			function u(U) {
				return (0, w.$applyNodeReplacement)(new C(void 0, U));
			}
			function a(U) {
				return U instanceof C;
			}
			class h extends w.ElementNode {
				static getType() {
					return "list";
				}
				static clone(z) {
					const F = z.__listType || p[z.__tag];
					return new h(F, z.__start, z.__key);
				}
				constructor(z, F, x) {
					super(x);
					const H = p[z] || z;
					(this.__listType = H),
						(this.__tag = H === "number" ? "ol" : "ul"),
						(this.__start = F);
				}
				getTag() {
					return this.__tag;
				}
				setListType(z) {
					const F = this.getWritable();
					(F.__listType = z), (F.__tag = z === "number" ? "ol" : "ul");
				}
				getListType() {
					return this.__listType;
				}
				getStart() {
					return this.__start;
				}
				createDOM(z, F) {
					const x = this.__tag,
						H = document.createElement(x);
					return (
						this.__start !== 1 && H.setAttribute("start", String(this.__start)),
						(H.__lexicalListType = this.__listType),
						c(H, z.theme, this),
						H
					);
				}
				updateDOM(z, F, x) {
					return z.__tag !== this.__tag ? !0 : (c(F, x.theme, this), !1);
				}
				static importDOM() {
					return {
						ol: (z) => ({ conversion: g, priority: 0 }),
						ul: (z) => ({ conversion: g, priority: 0 }),
					};
				}
				static importJSON(z) {
					const F = o(z.listType, z.start);
					return (
						F.setFormat(z.format),
						F.setIndent(z.indent),
						F.setDirection(z.direction),
						F
					);
				}
				exportDOM(z) {
					const { element: F } = super.exportDOM(z);
					return (
						F &&
							(this.__start !== 1 &&
								F.setAttribute("start", String(this.__start)),
							this.__listType === "check" &&
								F.setAttribute("__lexicalListType", "check")),
						{ element: F }
					);
				}
				exportJSON() {
					return {
						...super.exportJSON(),
						listType: this.getListType(),
						start: this.getStart(),
						tag: this.getTag(),
						type: "list",
						version: 1,
					};
				}
				canBeEmpty() {
					return !1;
				}
				canIndent() {
					return !1;
				}
				append(...z) {
					for (let F = 0; F < z.length; F++) {
						const x = z[F];
						if (a(x)) super.append(x);
						else {
							const H = u();
							if (f(x)) H.append(x);
							else if ((0, w.$isElementNode)(x)) {
								const q = (0, w.$createTextNode)(x.getTextContent());
								H.append(q);
							} else H.append(x);
							super.append(H);
						}
					}
					return A(this), this;
				}
				extractWithChild(z) {
					return a(z);
				}
			}
			e.ListNode = h;
			function c(U, z, F) {
				const x = [],
					H = [],
					q = z.list;
				if (q !== void 0) {
					const V = q[`${F.__tag}Depth`] || [],
						G = b(F) - 1,
						K = G % V.length,
						J = V[K],
						W = q[F.__tag];
					let X;
					const Y = q.nested;
					if (
						(Y !== void 0 && Y.list && (X = Y.list),
						W !== void 0 && x.push(W),
						J !== void 0)
					) {
						const ie = J.split(" ");
						x.push(...ie);
						for (let ne = 0; ne < V.length; ne++)
							ne !== K && H.push(F.__tag + ne);
					}
					if (X !== void 0) {
						const ie = X.split(" ");
						G > 1 ? x.push(...ie) : H.push(...ie);
					}
				}
				H.length > 0 && (0, i.removeClassNamesFromElement)(U, ...H),
					x.length > 0 && (0, i.addClassNamesToElement)(U, ...x);
			}
			function n(U) {
				const z = [];
				for (let F = 0; F < U.length; F++) {
					const x = U[F];
					if (a(x)) {
						z.push(x);
						const H = x.getChildren();
						H.length > 1 &&
							H.forEach((q) => {
								f(q) && z.push(I(q));
							});
					} else z.push(I(x));
				}
				return z;
			}
			function g(U) {
				const z = U.nodeName.toLowerCase();
				let F = null;
				if (z === "ol") {
					const x = U.start;
					F = o("number", x);
				} else
					z === "ul" &&
						((0, i.isHTMLElement)(U) &&
						U.getAttribute("__lexicallisttype") === "check"
							? (F = o("check"))
							: (F = o("bullet")));
				return { after: n, node: F };
			}
			const p = { ol: "number", ul: "bullet" };
			function o(U, z = 1) {
				return (0, w.$applyNodeReplacement)(new h(U, z));
			}
			function f(U) {
				return U instanceof h;
			}
			function b(U) {
				let z = 1,
					F = U.getParent();
				for (; F != null; ) {
					if (a(F)) {
						const x = F.getParent();
						if (f(x)) {
							z++, (F = x.getParent());
							continue;
						}
						E(!1, "A ListItemNode must have a ListNode for a parent.");
					}
					return z;
				}
				return z;
			}
			function s(U) {
				let z = U.getParent();
				f(z) || E(!1, "A ListItemNode must have a ListNode for a parent.");
				let F = z;
				for (; F !== null; ) (F = F.getParent()), f(F) && (z = F);
				return z;
			}
			function l(U) {
				let z = !0;
				const F = U.getFirstChild();
				if (f(F)) return !1;
				let x = U;
				for (; x !== null; )
					a(x) && x.getNextSiblings().length > 0 && (z = !1),
						(x = x.getParent());
				return z;
			}
			function y(U) {
				let z = [];
				const F = U.getChildren().filter(a);
				for (let x = 0; x < F.length; x++) {
					const H = F[x],
						q = H.getFirstChild();
					f(q) ? (z = z.concat(y(q))) : z.push(H);
				}
				return z;
			}
			function $(U) {
				return a(U) && f(U.getFirstChild());
			}
			function v(U) {
				let z = U;
				for (; z !== null; ) {
					if (a(z)) return z;
					z = z.getParent();
				}
				return null;
			}
			function S(U) {
				let z = U;
				for (; z.getNextSibling() == null && z.getPreviousSibling() == null; ) {
					const F = z.getParent();
					if (F == null || !(a(z) || f(z))) break;
					z = F;
				}
				z.remove();
			}
			function I(U) {
				return u().append(U);
			}
			function T(U, z) {
				return (
					a(U) &&
					(z.length === 0 ||
						(z.length === 1 && U.is(z[0]) && U.getChildrenSize() === 0))
				);
			}
			function P(U) {
				const z = U.getParent();
				let F = 1;
				z != null &&
					(f(z)
						? (F = z.getStart())
						: E(
								!1,
								"$getListItemValue: list node is not parent of list item node",
							));
				const x = U.getPreviousSiblings();
				for (let H = 0; H < x.length; H++) {
					const q = x[H];
					a(q) && !f(q.getFirstChild()) && F++;
				}
				return F;
			}
			function k(U, z) {
				U.update(() => {
					const F = (0, t.$getSelection)();
					if (
						(0, w.$isRangeSelection)(F) ||
						(0, t.DEPRECATED_$isGridSelection)(F)
					) {
						const x = F.getNodes(),
							q = F.anchor.getNode(),
							V = q.getParent();
						if (T(q, x)) {
							const G = o(z);
							if ((0, t.$isRootOrShadowRoot)(V)) {
								q.replace(G);
								const K = u();
								(0, w.$isElementNode)(q) &&
									(K.setFormat(q.getFormatType()), K.setIndent(q.getIndent())),
									G.append(K);
							} else if (a(q)) {
								const K = q.getParentOrThrow();
								L(G, K.getChildren()), K.replace(G);
							}
							return;
						} else {
							const G = new Set();
							for (let K = 0; K < x.length; K++) {
								const J = x[K];
								if (
									(0, w.$isElementNode)(J) &&
									J.isEmpty() &&
									!G.has(J.getKey())
								) {
									D(J, z);
									continue;
								}
								if ((0, t.$isLeafNode)(J)) {
									let W = J.getParent();
									for (; W != null; ) {
										const X = W.getKey();
										if (f(W)) {
											if (!G.has(X)) {
												const Y = o(z);
												L(Y, W.getChildren()), W.replace(Y), A(Y), G.add(X);
											}
											break;
										} else {
											const Y = W.getParent();
											if ((0, t.$isRootOrShadowRoot)(Y) && !G.has(X)) {
												G.add(X), D(W, z);
												break;
											}
											W = Y;
										}
									}
								}
							}
						}
					}
				});
			}
			function L(U, z) {
				U.splice(U.getChildrenSize(), 0, z);
			}
			function D(U, z) {
				if (f(U)) return U;
				const F = U.getPreviousSibling(),
					x = U.getNextSibling(),
					H = u();
				if (
					(H.setFormat(U.getFormatType()),
					H.setIndent(U.getIndent()),
					L(H, U.getChildren()),
					f(F) && z === F.getListType())
				)
					return (
						F.append(H),
						U.remove(),
						f(x) &&
							z === x.getListType() &&
							(L(F, x.getChildren()), x.remove()),
						F
					);
				if (f(x) && z === x.getListType())
					return x.getFirstChildOrThrow().insertBefore(H), U.remove(), x;
				{
					const q = o(z);
					return q.append(H), U.replace(q), A(q), q;
				}
			}
			function M(U, z) {
				const F = U.getLastChild(),
					x = z.getFirstChild();
				F &&
					x &&
					$(F) &&
					$(x) &&
					(M(F.getFirstChild(), x.getFirstChild()), x.remove());
				const H = z.getChildren();
				H.length > 0 && (U.append(...H), A(U)), z.remove();
			}
			function N(U) {
				U.update(() => {
					const z = (0, t.$getSelection)();
					if ((0, w.$isRangeSelection)(z)) {
						const F = new Set(),
							x = z.getNodes(),
							H = z.anchor.getNode();
						if (T(H, x)) F.add(s(H));
						else
							for (let q = 0; q < x.length; q++) {
								const V = x[q];
								if ((0, t.$isLeafNode)(V)) {
									const G = (0, i.$getNearestNodeOfType)(V, C);
									G != null && F.add(s(G));
								}
							}
						for (const q of F) {
							let V = q;
							const G = y(q);
							for (const K of G) {
								const J = (0, w.$createParagraphNode)();
								L(J, K.getChildren()),
									V.insertAfter(J),
									(V = J),
									K.__key === z.anchor.key &&
										z.anchor.set(J.getKey(), 0, "element"),
									K.__key === z.focus.key &&
										z.focus.set(J.getKey(), 0, "element"),
									K.remove();
							}
							q.remove();
						}
					}
				});
			}
			function A(U, z) {
				const F = z || U.getChildren();
				if (F !== void 0)
					for (let x = 0; x < F.length; x++) {
						const H = F[x];
						if (a(H)) {
							const q = H.getValue(),
								V = P(H);
							q !== V && H.setValue(V);
						}
					}
			}
			function R(U) {
				const z = new Set();
				if ($(U) || z.has(U.getKey())) return;
				const F = U.getParent(),
					x = U.getNextSibling(),
					H = U.getPreviousSibling();
				if ($(x) && $(H)) {
					const q = H.getFirstChild();
					if (f(q)) {
						q.append(U);
						const V = x.getFirstChild();
						if (f(V)) {
							const G = V.getChildren();
							L(q, G), x.remove(), z.add(x.getKey());
						}
						A(q);
					}
				} else if ($(x)) {
					const q = x.getFirstChild();
					if (f(q)) {
						const V = q.getFirstChild();
						V !== null && V.insertBefore(U), A(q);
					}
				} else if ($(H)) {
					const q = H.getFirstChild();
					f(q) && (q.append(U), A(q));
				} else if (f(F)) {
					const q = u(),
						V = o(F.getListType());
					q.append(V),
						V.append(U),
						H ? H.insertAfter(q) : x ? x.insertBefore(q) : F.append(q),
						A(V);
				}
				f(F) && A(F);
			}
			function O(U) {
				if ($(U)) return;
				const z = U.getParent(),
					F = z ? z.getParent() : void 0,
					x = F ? F.getParent() : void 0;
				if (f(x) && a(F) && f(z)) {
					const H = z ? z.getFirstChild() : void 0,
						q = z ? z.getLastChild() : void 0;
					if (U.is(H)) F.insertBefore(U), z.isEmpty() && F.remove();
					else if (U.is(q)) F.insertAfter(U), z.isEmpty() && F.remove();
					else {
						const V = z.getListType(),
							G = u(),
							K = o(V);
						G.append(K), U.getPreviousSiblings().forEach((X) => K.append(X));
						const J = u(),
							W = o(V);
						J.append(W),
							L(W, U.getNextSiblings()),
							F.insertBefore(G),
							F.insertAfter(J),
							F.replace(U);
					}
					A(z), A(x);
				}
			}
			function B() {
				const U = (0, t.$getSelection)();
				if (!(0, w.$isRangeSelection)(U) || !U.isCollapsed()) return !1;
				const z = U.anchor.getNode();
				if (!a(z) || z.getTextContent() !== "") return !1;
				const F = s(z),
					x = z.getParent();
				E(f(x), "A ListItemNode must have a ListNode for a parent.");
				const H = x.getParent();
				let q;
				if ((0, t.$isRootOrShadowRoot)(H))
					(q = (0, w.$createParagraphNode)()), F.insertAfter(q);
				else if (a(H)) (q = u()), H.insertAfter(q);
				else return !1;
				q.select();
				const V = z.getNextSiblings();
				if (V.length > 0) {
					const G = o(x.getListType());
					if ((0, w.$isParagraphNode)(q)) q.insertAfter(G);
					else {
						const K = u();
						K.append(G), q.insertAfter(K);
					}
					V.forEach((K) => {
						K.remove(), G.append(K);
					});
				}
				return S(z), !0;
			}
		}),
		