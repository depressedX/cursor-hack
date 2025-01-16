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
		define(
			de[924],
			he([1, 0, 164, 923, 923, 923, 923]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.REMOVE_LIST_COMMAND =
						e.INSERT_CHECK_LIST_COMMAND =
						e.INSERT_ORDERED_LIST_COMMAND =
						e.INSERT_UNORDERED_LIST_COMMAND =
						e.removeList =
						e.ListNode =
						e.ListItemNode =
						e.insertList =
						e.$isListNode =
						e.$isListItemNode =
						e.$handleListInsertParagraph =
						e.$getListDepth =
						e.$createListNode =
						e.$createListItemNode =
							void 0),
					Object.defineProperty(e, "$handleListInsertParagraph", {
						enumerable: !0,
						get: function () {
							return i.$handleListInsertParagraph;
						},
					}),
					Object.defineProperty(e, "insertList", {
						enumerable: !0,
						get: function () {
							return i.insertList;
						},
					}),
					Object.defineProperty(e, "removeList", {
						enumerable: !0,
						get: function () {
							return i.removeList;
						},
					}),
					Object.defineProperty(e, "$createListItemNode", {
						enumerable: !0,
						get: function () {
							return w.$createListItemNode;
						},
					}),
					Object.defineProperty(e, "$isListItemNode", {
						enumerable: !0,
						get: function () {
							return w.$isListItemNode;
						},
					}),
					Object.defineProperty(e, "ListItemNode", {
						enumerable: !0,
						get: function () {
							return w.ListItemNode;
						},
					}),
					Object.defineProperty(e, "$createListNode", {
						enumerable: !0,
						get: function () {
							return E.$createListNode;
						},
					}),
					Object.defineProperty(e, "$isListNode", {
						enumerable: !0,
						get: function () {
							return E.$isListNode;
						},
					}),
					Object.defineProperty(e, "ListNode", {
						enumerable: !0,
						get: function () {
							return E.ListNode;
						},
					}),
					Object.defineProperty(e, "$getListDepth", {
						enumerable: !0,
						get: function () {
							return C.$getListDepth;
						},
					}),
					(e.INSERT_UNORDERED_LIST_COMMAND = (0, t.createCommand)(
						"INSERT_UNORDERED_LIST_COMMAND",
					)),
					(e.INSERT_ORDERED_LIST_COMMAND = (0, t.createCommand)(
						"INSERT_ORDERED_LIST_COMMAND",
					)),
					(e.INSERT_CHECK_LIST_COMMAND = (0, t.createCommand)(
						"INSERT_CHECK_LIST_COMMAND",
					)),
					(e.REMOVE_LIST_COMMAND = (0, t.createCommand)("REMOVE_LIST_COMMAND"));
			},
		),
		define(
			de[2599],
			he([1, 0, 2598, 921, 304, 164, 1416]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.onCopyForPlainText = d),
					(e.onPasteForPlainText = m),
					(e.onCutForPlainText = r),
					(e.registerPlainText = u);
				function d(a, h) {
					h.update(() => {
						const c = a instanceof KeyboardEvent ? null : a.clipboardData,
							n = (0, E.$getSelection)();
						if (n !== null && c != null) {
							a.preventDefault();
							const g = (0, t.$getHtmlContent)(h);
							g !== null && c.setData("text/html", g),
								c.setData("text/plain", n.getTextContent());
						}
					});
				}
				function m(a, h) {
					a.preventDefault(),
						h.update(
							() => {
								const c = (0, E.$getSelection)(),
									n =
										a instanceof InputEvent || a instanceof KeyboardEvent
											? null
											: a.clipboardData;
								n != null &&
									(0, E.$isRangeSelection)(c) &&
									(0, t.$insertDataTransferForPlainText)(n, c);
							},
							{ tag: "paste" },
						);
				}
				function r(a, h) {
					d(a, h),
						h.update(() => {
							const c = (0, E.$getSelection)();
							(0, E.$isRangeSelection)(c) && c.removeText();
						});
				}
				function u(a) {
					return (0, w.mergeRegister)(
						a.registerCommand(
							E.DELETE_CHARACTER_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								return (0, E.$isRangeSelection)(n)
									? (n.deleteCharacter(c), !0)
									: !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.DELETE_WORD_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								return (0, E.$isRangeSelection)(n) ? (n.deleteWord(c), !0) : !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.DELETE_LINE_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								return (0, E.$isRangeSelection)(n) ? (n.deleteLine(c), !0) : !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.CONTROLLED_TEXT_INSERTION_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								if (!(0, E.$isRangeSelection)(n)) return !1;
								if (typeof c == "string") n.insertText(c);
								else {
									const g = c.dataTransfer;
									if (g != null) (0, t.$insertDataTransferForPlainText)(g, n);
									else {
										const p = c.data;
										p && n.insertText(p);
									}
								}
								return !0;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.REMOVE_TEXT_COMMAND,
							() => {
								const c = (0, E.$getSelection)();
								return (0, E.$isRangeSelection)(c) ? (c.removeText(), !0) : !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.INSERT_LINE_BREAK_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								return (0, E.$isRangeSelection)(n)
									? (n.insertLineBreak(c), !0)
									: !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.INSERT_PARAGRAPH_COMMAND,
							() => {
								const c = (0, E.$getSelection)();
								return (0, E.$isRangeSelection)(c)
									? (c.insertLineBreak(), !0)
									: !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.KEY_ARROW_LEFT_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								if (!(0, E.$isRangeSelection)(n)) return !1;
								const g = c,
									p = g.shiftKey;
								return (0, i.$shouldOverrideDefaultCharacterSelection)(n, !0)
									? (g.preventDefault(), (0, i.$moveCharacter)(n, p, !0), !0)
									: !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.KEY_ARROW_RIGHT_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								if (!(0, E.$isRangeSelection)(n)) return !1;
								const g = c,
									p = g.shiftKey;
								return (0, i.$shouldOverrideDefaultCharacterSelection)(n, !1)
									? (g.preventDefault(), (0, i.$moveCharacter)(n, p, !1), !0)
									: !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.KEY_BACKSPACE_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								return (0, E.$isRangeSelection)(n)
									? (c.preventDefault(),
										a.dispatchCommand(E.DELETE_CHARACTER_COMMAND, !0))
									: !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.KEY_DELETE_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								return (0, E.$isRangeSelection)(n)
									? (c.preventDefault(),
										a.dispatchCommand(E.DELETE_CHARACTER_COMMAND, !1))
									: !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.KEY_ENTER_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								if (!(0, E.$isRangeSelection)(n)) return !1;
								if (c !== null) {
									if (
										(C.IS_IOS || C.IS_SAFARI || C.IS_APPLE_WEBKIT) &&
										C.CAN_USE_BEFORE_INPUT
									)
										return !1;
									c.preventDefault();
								}
								return a.dispatchCommand(E.INSERT_LINE_BREAK_COMMAND, !1);
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.COPY_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								return (0, E.$isRangeSelection)(n) ? (d(c, a), !0) : !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.CUT_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								return (0, E.$isRangeSelection)(n) ? (r(c, a), !0) : !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.PASTE_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								return (0, E.$isRangeSelection)(n) ? (m(c, a), !0) : !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.DROP_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								return (0, E.$isRangeSelection)(n)
									? (c.preventDefault(), !0)
									: !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
						a.registerCommand(
							E.DRAGSTART_COMMAND,
							(c) => {
								const n = (0, E.$getSelection)();
								return (0, E.$isRangeSelection)(n)
									? (c.preventDefault(), !0)
									: !1;
							},
							E.COMMAND_PRIORITY_EDITOR,
						),
					);
				}
			},
		),
		define(
			de[2600],
			he([1, 0, 2, 2, 2, 2, 2, 164, 181, 1563, 1158, 304, 13]),
			function (ce, e, t, i, w, E, C, d, m, r, u, a, h) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.BlockWithAlignableContents = n);
				const c = (0, t.template)("<div>");
				function n(g) {
					const [p] = (0, m.useLexicalComposerContext)(),
						[o, f, b] = (0, u.useLexicalNodeSelection)(g.nodeKey);
					let s;
					const l = (y) => (
						o() &&
							(0, d.$isNodeSelection)((0, d.$getSelection)()) &&
							(y.preventDefault(),
							p.update(() => {
								const $ = (0, d.$getNodeByKey)(g.nodeKey);
								$ !== null &&
									((0, d.$setSelection)($.selectPrevious()),
									(0, d.$isDecoratorNode)($) && $.remove(),
									f(!1));
							})),
						!1
					);
					return (
						(0, h.createEffect)(() => {
							(0, h.onCleanup)(
								(0, a.mergeRegister)(
									p.registerCommand(
										d.FORMAT_ELEMENT_COMMAND,
										(y) => {
											if (o()) {
												const $ = (0, d.$getSelection)();
												if ((0, d.$isNodeSelection)($)) {
													const v = (0, d.$getNodeByKey)(g.nodeKey);
													(0, r.$isDecoratorBlockNode)(v) && v.setFormat(y);
												} else if ((0, d.$isRangeSelection)($)) {
													const v = $.getNodes();
													for (const S of v)
														(0, r.$isDecoratorBlockNode)(S)
															? S.setFormat(y)
															: (0, a.$getNearestBlockElementAncestorOrThrow)(
																	S,
																).setFormat(y);
												}
												return !0;
											}
											return !1;
										},
										d.COMMAND_PRIORITY_LOW,
									),
									p.registerCommand(
										d.CLICK_COMMAND,
										(y) =>
											y.target === s
												? (y.preventDefault(), y.shiftKey || b(), f(!o), !0)
												: !1,
										d.COMMAND_PRIORITY_LOW,
									),
									p.registerCommand(
										d.KEY_DELETE_COMMAND,
										l,
										d.COMMAND_PRIORITY_LOW,
									),
									p.registerCommand(
										d.KEY_BACKSPACE_COMMAND,
										l,
										d.COMMAND_PRIORITY_LOW,
									),
								),
							);
						}),
						(() => {
							const y = c(),
								$ = s;
							return (
								typeof $ == "function" ? (0, C.use)($, y) : (s = y),
								(0, E.insert)(y, () => g.children),
								(0, w.effect)(
									(v) => {
										const S = { [g.classes.base]: !0, [g.classes.focus]: o() },
											I = g.format ? g.format : void 0;
										return (
											(v._v$ = (0, i.classList)(y, S, v._v$)),
											I !== v._v$2 &&
												((v._v$2 = I) != null
													? y.style.setProperty("text-align", I)
													: y.style.removeProperty("text-align")),
											v
										);
									},
									{ _v$: void 0, _v$2: void 0 },
								),
								y
							);
						})()
					);
				}
			},
		),
		define(
			de[2601],
			he([1, 0, 924, 164, 181, 304, 13]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.CheckListPlugin = d),
					(e.listenPointerDown = r),
					(e.handleCheckItemEvent = u),
					(e.handleClick = a),
					(e.handlePointerDown = h),
					(e.findEditor = c),
					(e.getActiveCheckListItem = n),
					(e.findCheckListItemSibling = g),
					(e.handleArrownUpOrDown = p);
				function d() {
					const [o] = (0, w.useLexicalComposerContext)();
					return (
						(0, C.createEffect)(() => {
							(0, C.onCleanup)(
								(0, E.mergeRegister)(
									o.registerCommand(
										t.INSERT_CHECK_LIST_COMMAND,
										() => ((0, t.insertList)(o, "check"), !0),
										i.COMMAND_PRIORITY_LOW,
									),
									o.registerCommand(
										i.KEY_ARROW_DOWN_COMMAND,
										(f) => p(f, o, !1),
										i.COMMAND_PRIORITY_LOW,
									),
									o.registerCommand(
										i.KEY_ARROW_UP_COMMAND,
										(f) => p(f, o, !0),
										i.COMMAND_PRIORITY_LOW,
									),
									o.registerCommand(
										i.KEY_ESCAPE_COMMAND,
										(f) => {
											if (n() != null) {
												const s = o.getRootElement();
												return s?.focus(), !0;
											}
											return !1;
										},
										i.COMMAND_PRIORITY_LOW,
									),
									o.registerCommand(
										i.KEY_SPACE_COMMAND,
										(f) => {
											const b = n();
											return b != null && o.isEditable()
												? (o.update(() => {
														const s = (0, i.$getNearestNodeFromDOMNode)(b);
														(0, t.$isListItemNode)(s) &&
															(f.preventDefault(), s.toggleChecked());
													}),
													!0)
												: !1;
										},
										i.COMMAND_PRIORITY_LOW,
									),
									o.registerCommand(
										i.KEY_ARROW_LEFT_COMMAND,
										(f) =>
											o.getEditorState().read(() => {
												const b = (0, i.$getSelection)();
												if ((0, i.$isRangeSelection)(b) && b.isCollapsed()) {
													const { anchor: s } = b,
														l = s.type === "element";
													if (l || s.offset === 0) {
														const y = s.getNode(),
															$ = (0, E.$findMatchingParent)(
																y,
																(v) =>
																	(0, i.$isElementNode)(v) && !v.isInline(),
															);
														if ((0, t.$isListItemNode)($)) {
															const v = $.getParent();
															if (
																(0, t.$isListNode)(v) &&
																v.getListType() === "check" &&
																(l || $.getFirstDescendant() === y)
															) {
																const S = o.getElementByKey($.__key);
																if (S != null && document.activeElement !== S)
																	return S.focus(), f.preventDefault(), !0;
															}
														}
													}
												}
												return !1;
											}),
										i.COMMAND_PRIORITY_LOW,
									),
									r(),
								),
							);
						}),
						null
					);
				}
				let m = 0;
				function r() {
					return (
						m++ === 0 &&
							(document.addEventListener("click", a),
							document.addEventListener("pointerdown", h)),
						() => {
							--m === 0 &&
								(document.removeEventListener("click", a),
								document.removeEventListener("pointerdown", h));
						}
					);
				}
				function u(o, f) {
					const b = o.target;
					if (b === null || !(0, E.isHTMLElement)(b)) return;
					const s = b.firstChild;
					if (
						s != null &&
						(0, E.isHTMLElement)(s) &&
						(s.tagName === "UL" || s.tagName === "OL")
					)
						return;
					const l = b.parentNode;
					if (!l || l.__lexicalListType !== "check") return;
					const y = o.pageX,
						$ = b.getBoundingClientRect();
					(b.dir === "rtl"
						? y < $.right && y > $.right - 20
						: y > $.left && y < $.left + 20) && f();
				}
				function a(o) {
					u(o, () => {
						const f = o.target,
							b = c(f);
						b != null &&
							b.isEditable() &&
							b.update(() => {
								if (o.target) {
									const s = (0, i.$getNearestNodeFromDOMNode)(f);
									(0, t.$isListItemNode)(s) && (f.focus(), s.toggleChecked());
								}
							});
					});
				}
				function h(o) {
					u(o, () => {
						o.preventDefault();
					});
				}
				function c(o) {
					let f = o;
					for (; f; ) {
						if (f.__lexicalEditor) return f.__lexicalEditor;
						f = f.parentNode;
					}
					return null;
				}
				function n() {
					const o = document.activeElement;
					return o != null &&
						o.tagName === "LI" &&
						o.parentNode != null &&
						o.parentNode.__lexicalListType === "check"
						? o
						: null;
				}
				function g(o, f) {
					let b = f ? o.getPreviousSibling() : o.getNextSibling(),
						s = o;
					for (; b == null && (0, t.$isListItemNode)(s); )
						(s = s.getParentOrThrow().getParent()),
							s != null &&
								(b = f ? s.getPreviousSibling() : s.getNextSibling());
					for (; (0, t.$isListItemNode)(b); ) {
						const l = f ? b.getLastChild() : b.getFirstChild();
						if (!(0, t.$isListNode)(l)) return b;
						b = f ? l.getLastChild() : l.getFirstChild();
					}
					return null;
				}
				function p(o, f, b) {
					const s = n();
					return (
						s != null &&
							f.update(() => {
								const l = (0, i.$getNearestNodeFromDOMNode)(s);
								if (!(0, t.$isListItemNode)(l)) return;
								const y = g(l, b);
								if (y != null) {
									y.selectStart();
									const $ = f.getElementByKey(y.__key);
									$ != null &&
										(o.preventDefault(),
										setTimeout(() => {
											$.focus();
										}, 0));
								}
							}),
						!1
					);
				}
			},
		),
		define(
			de[1564],
			he([1, 0, 2, 164, 13, 164, 181, 1158, 304]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.HorizontalRuleNode = e.INSERT_HORIZONTAL_RULE_COMMAND = void 0),
					(e.HorizontalRuleComponent = r),
					(e.convertHorizontalRuleElement = a),
					(e.$createHorizontalRuleNode = h),
					(e.$isHorizontalRuleNode = c),
					(e.INSERT_HORIZONTAL_RULE_COMMAND = (0, E.createCommand)(
						"INSERT_HORIZONTAL_RULE_COMMAND",
					));
				function r(n) {
					const [g] = (0, C.useLexicalComposerContext)(),
						[p, o, f] = (0, d.useLexicalNodeSelection)(n.nodeKey),
						b = (s) => {
							if (p() && (0, i.$isNodeSelection)((0, i.$getSelection)())) {
								s.preventDefault();
								const y = (0, i.$getNodeByKey)(n.nodeKey);
								c(y) && y.remove(), o(!1);
							}
							return !1;
						};
					return (
						(0, w.createEffect)(() => {
							(0, w.onCleanup)(
								(0, m.mergeRegister)(
									g.registerCommand(
										i.CLICK_COMMAND,
										(s) => {
											const l = g.getElementByKey(n.nodeKey);
											return s.target === l
												? (s.shiftKey || f(), o(!p), !0)
												: !1;
										},
										i.COMMAND_PRIORITY_LOW,
									),
									g.registerCommand(
										i.KEY_DELETE_COMMAND,
										b,
										i.COMMAND_PRIORITY_LOW,
									),
									g.registerCommand(
										i.KEY_BACKSPACE_COMMAND,
										b,
										i.COMMAND_PRIORITY_LOW,
									),
								),
							);
						}),
						(0, w.createEffect)(() => {
							const s = g.getElementByKey(n.nodeKey);
							s !== null && (s.className = p() ? "selected" : "");
						}),
						null
					);
				}
				class u extends E.DecoratorNode {
					static getType() {
						return "horizontalrule";
					}
					static clone(g) {
						return new u(g.__key);
					}
					static importJSON(g) {
						return h();
					}
					static importDOM() {
						return { hr: () => ({ conversion: a, priority: 0 }) };
					}
					exportJSON() {
						return { type: "horizontalrule", version: 1 };
					}
					exportDOM() {
						return { element: document.createElement("hr") };
					}
					createDOM() {
						return document.createElement("hr");
					}
					getTextContent() {
						return `
`;
					}
					isInline() {
						return !1;
					}
					updateDOM() {
						return !1;
					}
					decorate() {
						const g = this;
						return (0, t.createComponent)(r, {
							get nodeKey() {
								return g.__key;
							},
						});
					}
				}
				e.HorizontalRuleNode = u;
				function a() {
					return { node: h() };
				}
				function h() {
					return (0, i.$applyNodeReplacement)(new u());
				}
				function c(n) {
					return n instanceof u;
				}
			},
		),
		define(
			de[2602],
			he([1, 0, 181, 1564, 304, 164, 13]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.HorizontalRulePlugin = d);
				function d() {
					const [m] = (0, t.useLexicalComposerContext)();
					return (
						(0, C.onCleanup)(
							m.registerCommand(
								i.INSERT_HORIZONTAL_RULE_COMMAND,
								(r) => {
									const u = (0, E.$getSelection)();
									if (!(0, E.$isRangeSelection)(u)) return !1;
									if (u.focus.getNode() !== null) {
										const h = (0, i.$createHorizontalRuleNode)();
										(0, w.$insertNodeToNearestRoot)(h);
									}
									return !0;
								},
								E.COMMAND_PRIORITY_EDITOR,
							),
						),
						null
					);
				}
			},
		),
		define(
			de[2603],
			he([1, 0, 181, 304, 164, 13]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.NodeEventPlugin = d);
				const C = new Set(["mouseenter", "mouseleave"]);
				function d(m) {
					const [r] = (0, t.useLexicalComposerContext)();
					return (
						(0, E.createEffect)(() => {
							const u = (0, E.untrack)(() => m.eventType),
								a = C.has(u),
								h = (c) => {
									r.update(() => {
										const n = (0, w.$getNearestNodeFromDOMNode)(c.target);
										if (n !== null) {
											const g = a
												? n instanceof m.nodeType
													? n
													: null
												: (0, i.$findMatchingParent)(
														n,
														(p) => p instanceof m.nodeType,
													);
											if (g !== null) {
												m.eventListener(c, r, g.getKey());
												return;
											}
										}
									});
								};
							return r.registerRootListener((c, n) => {
								c && c.addEventListener(u, h, a),
									n && n.removeEventListener(u, h, a);
							});
						}),
						null
					);
				}
			},
		),
		define(
			de[2604],
			he([1, 0, 181, 164, 13, 304]),
			function (ce, e, t, i, w, E) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$filter = C),
					(e.indentOverTab = d),
					(e.registerTabIndentation = m),
					(e.TabIndentationPlugin = r);
				function C(u, a) {
					const h = [];
					for (let c = 0; c < u.length; c++) {
						const n = a(u[c]);
						n !== null && h.push(n);
					}
					return h;
				}
				function d(u) {
					const a = u.getNodes();
					if (
						C(a, (f) =>
							(0, i.$isBlockElementNode)(f) && f.canIndent() ? f : null,
						).length > 0
					)
						return !0;
					const c = u.anchor,
						n = u.focus,
						g = n.isBefore(c) ? n : c,
						p = g.getNode(),
						o = (0, E.$getNearestBlockElementAncestorOrThrow)(p);
					if (o.canIndent()) {
						const f = o.getKey();
						let b = (0, i.$createRangeSelection)();
						if (
							(b.anchor.set(f, 0, "element"),
							b.focus.set(f, 0, "element"),
							(b = (0, i.$normalizeSelection__EXPERIMENTAL)(b)),
							b.anchor.is(g))
						)
							return !0;
					}
					return !1;
				}
				function m(u) {
					return u.registerCommand(
						i.KEY_TAB_COMMAND,
						(a) => {
							const h = (0, i.$getSelection)();
							if (!(0, i.$isRangeSelection)(h)) return !1;
							a.preventDefault();
							const c = d(h)
								? a.shiftKey
									? i.OUTDENT_CONTENT_COMMAND
									: i.INDENT_CONTENT_COMMAND
								: i.INSERT_TAB_COMMAND;
							return u.dispatchCommand(c, void 0);
						},
						i.COMMAND_PRIORITY_EDITOR,
					);
				}
				function r() {
					const [u] = (0, t.useLexicalComposerContext)();
					return (
						(0, w.createEffect)(() => {
							(0, w.onCleanup)(m(u));
						}),
						null
					);
				}
			},
		),
		define(
			de[925],
			he([1, 0, 2, 181, 304, 164, 13, 7, 75]),
			function (ce, e, t, i, w, E, C, d, m) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND =
						e.MenuOption =
						e.PUNCTUATION =
							void 0),
					(e.getFullMatchOffset = a),
					(e.$splitNodeContainingQuery = h),
					(e.getScrollParent = c),
					(e.isTriggerVisibleInNearestScrollContainer = n),
					(e.useDynamicPositioning = g),
					(e.LexicalMenu = p),
					(e.useMenuAnchorRef = o),
					(e.PUNCTUATION = `\\.,\\+\\*\\?\\$\\@\\|#{}\\(\\)\\^\\-\\[\\]\\\\/!%'"~=<>_:;`);
				class r {
					constructor(b) {
						(this.key = b),
							(this.ref = { current: null }),
							(this.setRefElement = this.setRefElement.bind(this));
					}
					setRefElement(b) {
						this.ref = { current: b };
					}
				}
				e.MenuOption = r;
				const u = (f) => {
					const b = (0, d.$Ogb)().document.getElementById("typeahead-menu");
					if (!b) return;
					const s = b.getBoundingClientRect();
					s.top + s.height > (0, d.$Ogb)().innerHeight &&
						b.scrollIntoView({ block: "center" }),
						s.top < 0 && b.scrollIntoView({ block: "center" }),
						f.scrollIntoView({ block: "nearest" });
				};
				function a(f, b, s) {
					let l = s;
					for (let y = l; y <= b.length; y++)
						f.substr(-y) === b.substr(0, y) && (l = y);
					return l;
				}
				function h(f) {
					const b = (0, E.$getSelection)();
					if (!(0, E.$isRangeSelection)(b) || !b.isCollapsed()) return null;
					const s = b.anchor;
					if (s.type !== "text") return null;
					const l = s.getNode();
					if (!l.isSimpleText()) return null;
					const y = s.offset,
						$ = l.getTextContent().slice(0, y),
						v = f.replaceableString.length,
						S = a($, f.matchingString, v),
						I = y - S;
					if (I < 0) return null;
					let T;
					return (
						I === 0 ? ([T] = l.splitText(y)) : ([, T] = l.splitText(I, y)), T
					);
				}
				function c(f, b) {
					let s = getComputedStyle(f);
					const l = s.position === "absolute",
						y = b ? /(auto|scroll|hidden)/ : /(auto|scroll)/;
					if (s.position === "fixed") return (0, d.$Ogb)().document.body;
					for (let $ = f; ($ = $.parentElement); )
						if (
							((s = getComputedStyle($)),
							!(l && s.position === "static") &&
								y.test(s.overflow + s.overflowY + s.overflowX))
						)
							return $;
					return (0, d.$Ogb)().document.body;
				}
				function n(f, b) {
					const s = f.getBoundingClientRect(),
						l = b.getBoundingClientRect();
					return s.top > l.top && s.top < l.bottom;
				}
				function g(f, b, s, l) {
					const [y] = (0, i.useLexicalComposerContext)(),
						$ = (0, d.$Ogb)().ResizeObserver;
					(0, C.createEffect)(() => {
						if (b != null && f() != null) {
							const v = y.getRootElement(),
								S = v != null ? c(v, !1) : (0, d.$Ogb)().document.body;
							let I = !1,
								T = n(b, S);
							const P = function () {
									I ||
										((0, d.$Ogb)().requestAnimationFrame(function () {
											s(), (I = !1);
										}),
										(I = !0));
									const L = n(b, S);
									L !== T && ((T = L), l?.(L));
								},
								k = new $(s);
							(0, d.$Ogb)().addEventListener("resize", s),
								(0, d.$Ogb)().document.addEventListener("scroll", P, {
									capture: !0,
									passive: !0,
								}),
								k.observe(b),
								(0, C.onCleanup)(() => {
									k.unobserve(b),
										(0, d.$Ogb)().removeEventListener("resize", s),
										(0, d.$Ogb)().document.removeEventListener("scroll", P);
								});
						}
					});
				}
				e.SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND = (0, E.createCommand)(
					"SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND",
				);
				function p(f) {
					const [b, s] = (0, C.createSignal)(null),
						[l, y] = (0, C.createSignal)(0);
					(0, C.createEffect)(
						(0, C.on)(
							() => f.resolution.match && f.resolution.match.matchingString,
							() => {
								s(0);
							},
						),
					);
					const $ = (I, T) => {
							f.editor.update(() => {
								const P =
									f.resolution.match != null && f.shouldSplitNodeWithQuery
										? h(f.resolution.match)
										: null;
								f.onSelectOption(
									I,
									P,
									f.close,
									f.resolution.match ? f.resolution.match.matchingString : "",
									T,
								);
							});
						},
						v = (I) => {
							s(I), y(l() + 1);
							const T = f.editor.getRootElement();
							T !== null &&
								(T.setAttribute("aria-activedescendant", "typeahead-item-" + I),
								s(I));
						};
					(0, C.createEffect)(() => {
						(0, C.onCleanup)(() => {
							const I = f.editor.getRootElement();
							I !== null && I.removeAttribute("aria-activedescendant");
						});
					});
					const S = (0, C.createMemo)(() =>
						f.options.filter((I) => "type" in I && I.type !== "staticheading"),
					);
					return (
						(0, C.createEffect)(() => {
							S() === null ? s(null) : b() === null && v(0);
						}),
						(0, C.createEffect)(() => {
							S().length <= (b() ?? 0) && b() !== 0 && v(0);
						}),
						(0, C.createEffect)(() => {
							(0, C.onCleanup)(() =>
								(0, w.mergeRegister)(
									f.editor.registerCommand(
										e.SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND,
										({ option: I }) =>
											I.ref && I.ref.current != null
												? (u(I.ref.current), !0)
												: !1,
										E.COMMAND_PRIORITY_LOW,
									),
								),
							);
						}),
						(0, C.createEffect)(() => {
							(0, C.onCleanup)(
								(0, w.mergeRegister)(
									f.editor.registerCommand(
										E.KEY_ARROW_DOWN_COMMAND,
										(I) => {
											const T = I;
											if (S() !== null && S().length && b() !== null) {
												const P = b() !== S().length - 1 ? b() + 1 : 0;
												s(P);
												const k = S()[P];
												return (
													k.ref != null &&
														k.ref.current &&
														f.editor.dispatchCommand(
															e.SCROLL_TYPEAHEAD_OPTION_INTO_VIEW_COMMAND,
															{ index: P, option: k },
														),
													T.preventDefault(),
													T.stopImmediatePropagation(),
													!0
												);
											}
											return !1;
										},
										E.COMMAND_PRIORITY_CRITICAL,
									),
									f.editor.registerCommand(
										E.KEY_ARROW_UP_COMMAND,
										(I) => {
											const T = I;
											if (S() !== null && S().length && b() !== null) {
												const P = b() !== 0 ? b() - 1 : S().length - 1;
												v(P);
												const k = S()[P];
												return (
													k.ref != null && k.ref.current && u(k.ref.current),
													T.preventDefault(),
													T.stopImmediatePropagation(),
													!0
												);
											}
											return !1;
										},
										E.COMMAND_PRIORITY_CRITICAL,
									),
									f.editor.registerCommand(
										E.KEY_ESCAPE_COMMAND,
										(I) => {
											const T = I;
											return (
												T.preventDefault(),
												T.stopImmediatePropagation(),
												f.close(),
												!0
											);
										},
										E.COMMAND_PRIORITY_LOW,
									),
									f.editor.registerCommand(
										E.KEY_TAB_COMMAND,
										(I) => {
											const T = I;
											return S() === null || b === null || S()[b()] == null
												? !1
												: (T.preventDefault(),
													T.stopImmediatePropagation(),
													$(S()[b()], T),
													!0);
										},
										E.COMMAND_PRIORITY_LOW,
									),
									f.editor.registerCommand(
										E.KEY_ENTER_COMMAND,
										(I) =>
											S() === null || b === null || S()[b()] == null
												? !1
												: (I !== null &&
														(I.preventDefault(), I.stopImmediatePropagation()),
													$(S()[b()], I),
													!0),
										E.COMMAND_PRIORITY_CRITICAL,
									),
								),
							);
						}),
						(0, t.createComponent)(f.menuRenderFn, {
							get options() {
								return f.options;
							},
							get selectedIndex() {
								return b();
							},
							selectOptionAndCleanUp: $,
							setHighlightedIndex: v,
							get anchorElementRef() {
								return f.anchorElementRef;
							},
							get matchingString() {
								return f.resolution.match
									? f.resolution.match.matchingString
									: null;
							},
							get match() {
								return f.resolution.match;
							},
						})
					);
				}
				function o(f, b, s, l) {
					const [y] = (0, i.useLexicalComposerContext)();
					let $ = m.$Bfb.document.createElement("div");
					const v = () => {
						const I = y.getRootElement(),
							T = $,
							P = T.firstChild;
						if (I !== null && f() !== null) {
							const { left: k, top: L, width: D, height: M } = f().getRect();
							if (
								((T.style.top = `${L + window.pageYOffset}px`),
								(T.style.left = `${k + window.pageXOffset}px`),
								(T.style.height = `${M}px`),
								(T.style.width = `${D}px`),
								P !== null)
							) {
								const N = P.getBoundingClientRect(),
									A = N.height,
									R = N.width,
									O = I.getBoundingClientRect();
								k + R > O.right &&
									(T.style.left = `${k - R + window.pageXOffset}px`);
								const B = 10;
								(L + A > window.innerHeight || L + A > O.bottom) &&
									L - O.top > A &&
									(T.style.top = `${L - A + window.pageYOffset - (M + B)}px`);
							}
							T.isConnected ||
								(s != null && (T.className = s),
								T.setAttribute("aria-label", "Typeahead menu"),
								T.setAttribute("id", "typeahead-menu"),
								T.setAttribute("role", "listbox"),
								(T.style.display = "block"),
								(T.style.position = "absolute"),
								(l ?? (0, d.$Ogb)().document.body).append(T)),
								($ = T),
								I.setAttribute("aria-controls", "typeahead-menu");
						}
					};
					return (
						(0, C.createEffect)(() => {
							const I = y.getRootElement();
							f() !== null &&
								(v(),
								(0, C.onCleanup)(() => {
									I !== null && I.removeAttribute("aria-controls");
									const T = $;
									T !== null && T.isConnected && T.remove();
								}));
						}),
						g(f, $, v, (I) => {
							f() !== null && (I || b(null));
						}),
						{
							get current() {
								return $;
							},
						}
					);
				}
			},
		),
		