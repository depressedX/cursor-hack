define(de[304], he([1, 0, 921, 164]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$splitNode = void 0),
				(e.invariant = w),
				(e.objectKlassEquals = E),
				(e.addClassNamesToElement = C),
				(e.removeClassNamesFromElement = d),
				(e.isMimeType = m),
				(e.mediaFileReader = r),
				(e.$dfs = u),
				(e.$getDepth = a),
				(e.$getNearestNodeOfType = h),
				(e.$getNearestBlockElementAncestorOrThrow = c),
				(e.$findMatchingParent = n),
				(e.mergeRegister = g),
				(e.registerNestedElementResolver = p),
				(e.$restoreEditorState = o),
				(e.$insertNodeToNearestRoot = f),
				(e.$wrapNodeInElement = b),
				(e.isHTMLAnchorElement = s),
				(e.isHTMLElement = l),
				Object.defineProperty(e, "$splitNode", {
					enumerable: !0,
					get: function () {
						return i.$splitNode;
					},
				});
			function w(y, $, ...v) {
				if (!y) throw new Error($);
			}
			function E(y, $) {
				return y !== null
					? Object.getPrototypeOf(y).constructor.name === $.name
					: !1;
			}
			function C(y, ...$) {
				$.forEach((v) => {
					if (typeof v == "string") {
						const S = v.split(" ").filter((I) => I !== "");
						y.classList.add(...S);
					}
				});
			}
			function d(y, ...$) {
				$.forEach((v) => {
					typeof v == "string" && y.classList.remove(...v.split(" "));
				});
			}
			function m(y, $) {
				for (const v of $) if (y.type.startsWith(v)) return !0;
				return !1;
			}
			function r(y, $) {
				const v = y[Symbol.iterator]();
				return new Promise((S, I) => {
					const T = [],
						P = () => {
							const { done: k, value: L } = v.next();
							if (k) return S(T);
							const D = new FileReader();
							D.addEventListener("error", I),
								D.addEventListener("load", () => {
									const M = D.result;
									typeof M == "string" && T.push({ file: L, result: M }), P();
								}),
								m(L, $) ? D.readAsDataURL(L) : P();
						};
					P();
				});
			}
			function u(y, $) {
				const v = [],
					S = (y || (0, i.$getRoot)()).getLatest(),
					I = $ || ((0, i.$isElementNode)(S) ? S.getLastDescendant() : S);
				let T = S,
					P = a(T);
				for (; T !== null && !T.is(I); )
					if (
						(v.push({ depth: P, node: T }),
						(0, i.$isElementNode)(T) && T.getChildrenSize() > 0)
					)
						(T = T.getFirstChild()), P++;
					else {
						let k = null;
						for (; k === null && T !== null; )
							(k = T.getNextSibling()),
								k === null ? ((T = T.getParent()), P--) : (T = k);
					}
				return T !== null && T.is(I) && v.push({ depth: P, node: T }), v;
			}
			function a(y) {
				let $ = y,
					v = 0;
				for (; ($ = $.getParent()) !== null; ) v++;
				return v;
			}
			function h(y, $) {
				let v = y;
				for (; v != null; ) {
					if (v instanceof $) return v;
					v = v.getParent();
				}
				return null;
			}
			function c(y) {
				const $ = n(y, (v) => (0, i.$isElementNode)(v) && !v.isInline());
				return (
					(0, i.$isElementNode)($) ||
						w(
							!1,
							"Expected node %s to have closest block element node.",
							y.__key,
						),
					$
				);
			}
			function n(y, $) {
				let v = y;
				for (; v !== (0, i.$getRoot)() && v != null; ) {
					if ($(v)) return v;
					v = v.getParent();
				}
				return null;
			}
			function g(...y) {
				return () => {
					y.forEach(($) => $());
				};
			}
			function p(y, $, v, S) {
				const I = (k) => k instanceof $,
					T = (k) => {
						const L = k.getChildren();
						for (let N = 0; N < L.length; N++) {
							const A = L[N];
							if (I(A)) return null;
						}
						let D = k,
							M = k;
						for (; D !== null; )
							if (((M = D), (D = D.getParent()), I(D)))
								return { child: M, parent: D };
						return null;
					},
					P = (k) => {
						const L = T(k);
						if (L !== null) {
							const { child: D, parent: M } = L;
							if (D.is(k)) {
								S(M, k);
								const N = D.getNextSiblings(),
									A = N.length;
								if ((M.insertAfter(D), A !== 0)) {
									const R = v(M);
									D.insertAfter(R);
									for (let O = 0; O < A; O++) R.append(N[O]);
								}
								!M.canBeEmpty() && M.getChildrenSize() === 0 && M.remove();
							}
						}
					};
				return y.registerNodeTransform($, P);
			}
			function o(y, $) {
				const S = new Map(),
					I = y._pendingEditorState;
				for (const [P, k] of $._nodeMap) {
					const L = (0, t.$cloneWithProperties)(k);
					(0, i.$isTextNode)(L) && (L.__text = k.__text), S.set(P, L);
				}
				I && (I._nodeMap = S), (y._dirtyType = 2);
				const T = $._selection;
				(0, i.$setSelection)(T === null ? null : T.clone());
			}
			function f(y) {
				const $ = (0, i.$getSelection)();
				if ((0, i.$isRangeSelection)($)) {
					const { focus: v } = $,
						S = v.getNode(),
						I = v.offset;
					if ((0, i.$isRootOrShadowRoot)(S)) {
						const T = S.getChildAtIndex(I);
						T == null ? S.append(y) : T.insertBefore(y), y.selectNext();
					} else {
						let T, P;
						(0, i.$isTextNode)(S)
							? ((T = S.getParentOrThrow()),
								(P = S.getIndexWithinParent()),
								I > 0 && ((P += 1), S.splitText(I)))
							: ((T = S), (P = I));
						const [, k] = (0, i.$splitNode)(T, P);
						k.insertBefore(y), k.selectStart();
					}
				} else {
					if (
						(0, i.$isNodeSelection)($) ||
						(0, i.DEPRECATED_$isGridSelection)($)
					) {
						const S = $.getNodes();
						S[S.length - 1].getTopLevelElementOrThrow().insertAfter(y);
					} else (0, i.$getRoot)().append(y);
					const v = (0, i.$createParagraphNode)();
					y.insertAfter(v), v.select();
				}
				return y.getLatest();
			}
			function b(y, $) {
				const v = $();
				return y.replace(v), v.append(y), v;
			}
			function s(y) {
				return l(y) && y.tagName === "A";
			}
			function l(y) {
				return y.nodeType === 1;
			}
		});
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	define(
		de[2597],
		he([1, 0, 2594, 921, 304, 164, 1417]),
		function (ce, e, t, i, w, E, C) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$getHtmlContent = d),
				(e.$getLexicalContent = m),
				(e.$insertDataTransferForPlainText = r),
				(e.$insertDataTransferForRichText = u),
				(e.$insertGeneratedNodes = a),
				(e.$basicInsertStrategy = h),
				(e.$mergeGridNodesStrategy = c),
				(e.exportNodeToJSON = n),
				(e.$appendNodesToJSON = g),
				(e.$generateJSONFromSelectedNodes = p),
				(e.$generateNodesFromSerializedNodes = o),
				(e.copyToClipboard = s),
				(e.$copyToClipboardEvent = l),
				(C = xi(C));
			function d(y) {
				const $ = (0, E.$getSelection)();
				return (
					$ == null && (0, C.default)(!1, "Expected valid LexicalSelection"),
					((0, E.$isRangeSelection)($) && $.isCollapsed()) ||
					$.getNodes().length === 0
						? ""
						: (0, t.$generateHtmlFromNodes)(y, $)
				);
			}
			function m(y) {
				const $ = (0, E.$getSelection)();
				return (
					$ == null && (0, C.default)(!1, "Expected valid LexicalSelection"),
					((0, E.$isRangeSelection)($) && $.isCollapsed()) ||
					$.getNodes().length === 0
						? null
						: JSON.stringify(p(y, $))
				);
			}
			function r(y, $) {
				const v = y.getData("text/plain") || y.getData("text/uri-list");
				v != null && $.insertRawText(v);
			}
			function u(y, $, v) {
				const S = y.getData("application/x-lexical-editor");
				if (S)
					try {
						const T = JSON.parse(S);
						if (T.namespace === v._config.namespace && Array.isArray(T.nodes)) {
							const P = o(T.nodes);
							return a(v, P, $);
						}
					} catch {}
				const I = y.getData("text/plain") || y.getData("text/uri-list");
				if (I != null)
					if ((0, E.$isRangeSelection)($)) {
						const T = I.split(/(\r?\n|\t)/),
							P = T.length;
						for (let k = 0; k < P; k++) {
							const L = T[k];
							L ===
								`
` ||
							L ===
								`\r
`
								? $.insertParagraph()
								: L === "	"
									? $.insertNodes([(0, E.$createTabNode)()])
									: $.insertText(L);
						}
					} else $.insertRawText(I);
			}
			function a(y, $, v) {
				const S = (0, E.$isRangeSelection)(v);
				if (
					((0, E.DEPRECATED_$isGridSelection)(v) ||
						(S &&
							(0, w.$findMatchingParent)(v.anchor.getNode(), (T) =>
								(0, E.DEPRECATED_$isGridCellNode)(T),
							) !== null &&
							(0, w.$findMatchingParent)(v.focus.getNode(), (T) =>
								(0, E.DEPRECATED_$isGridCellNode)(T),
							) !== null)) &&
					$.length === 1 &&
					(0, E.DEPRECATED_$isGridNode)($[0])
				) {
					c($, v, !1, y);
					return;
				}
				h($, v);
			}
			function h(y, $) {
				const v = [];
				let S = null;
				for (let I = 0; I < y.length; I++) {
					const T = y[I],
						P = (0, E.$isLineBreakNode)(T);
					if (
						P ||
						((0, E.$isDecoratorNode)(T) && T.isInline()) ||
						((0, E.$isElementNode)(T) && T.isInline()) ||
						(0, E.$isTextNode)(T) ||
						T.isParentRequired()
					) {
						if (S === null && ((S = T.createParentElementNode()), v.push(S), P))
							continue;
						S !== null && S.append(T);
					} else v.push(T), (S = null);
				}
				if ((0, E.$isRangeSelection)($)) $.insertNodes(v);
				else if ((0, E.DEPRECATED_$isGridSelection)($)) {
					const I = $.anchor.getNode();
					(0, E.DEPRECATED_$isGridCellNode)(I) ||
						(0, C.default)(!1, "Expected Grid Cell in Grid Selection"),
						I.append(...v);
				}
			}
			function c(y, $, v, S) {
				(y.length !== 1 || !(0, E.DEPRECATED_$isGridNode)(y[0])) &&
					(0, C.default)(
						!1,
						"$mergeGridNodesStrategy: Expected Grid insertion.",
					);
				const I = y[0],
					T = I.getChildren(),
					P = I.getFirstChildOrThrow().getChildrenSize(),
					k = I.getChildrenSize(),
					L = (0, w.$findMatchingParent)($.anchor.getNode(), (G) =>
						(0, E.DEPRECATED_$isGridCellNode)(G),
					),
					D =
						L &&
						(0, w.$findMatchingParent)(L, (G) =>
							(0, E.DEPRECATED_$isGridRowNode)(G),
						),
					M =
						D &&
						(0, w.$findMatchingParent)(D, (G) =>
							(0, E.DEPRECATED_$isGridNode)(G),
						);
				(!(0, E.DEPRECATED_$isGridCellNode)(L) ||
					!(0, E.DEPRECATED_$isGridRowNode)(D) ||
					!(0, E.DEPRECATED_$isGridNode)(M)) &&
					(0, C.default)(
						!1,
						"$mergeGridNodesStrategy: Expected selection to be inside of a Grid.",
					);
				const N = D.getIndexWithinParent(),
					A = Math.min(M.getChildrenSize() - 1, N + k - 1),
					R = L.getIndexWithinParent(),
					O = Math.min(D.getChildrenSize() - 1, R + P - 1),
					B = Math.min(R, O),
					U = Math.min(N, A),
					z = Math.max(R, O),
					F = Math.max(N, A),
					x = M.getChildren();
				let H = 0,
					q,
					V;
				for (let G = U; G <= F; G++) {
					const K = x[G];
					(0, E.DEPRECATED_$isGridRowNode)(K) ||
						(0, C.default)(!1, "getNodes: expected to find GridRowNode");
					const J = T[H];
					(0, E.DEPRECATED_$isGridRowNode)(J) ||
						(0, C.default)(!1, "getNodes: expected to find GridRowNode");
					const W = K.getChildren(),
						X = J.getChildren();
					let Y = 0;
					for (let ie = B; ie <= z; ie++) {
						const ne = W[ie];
						(0, E.DEPRECATED_$isGridCellNode)(ne) ||
							(0, C.default)(!1, "getNodes: expected to find GridCellNode");
						const ee = X[Y];
						(0, E.DEPRECATED_$isGridCellNode)(ee) ||
							(0, C.default)(!1, "getNodes: expected to find GridCellNode"),
							G === U && ie === B
								? (q = ne.getKey())
								: G === F && ie === z && (V = ne.getKey());
						const _ = ne.getChildren();
						ee.getChildren().forEach((te) => {
							(0, E.$isTextNode)(te) &&
								(0, E.$createParagraphNode)().append(te),
								ne.append(te);
						}),
							_.forEach((te) => te.remove()),
							Y++;
					}
					H++;
				}
				if (q && V) {
					const G = (0, E.DEPRECATED_$createGridSelection)();
					G.set(M.getKey(), q, V),
						(0, E.$setSelection)(G),
						S.dispatchCommand(E.SELECTION_CHANGE_COMMAND, void 0);
				}
			}
			function n(y) {
				const $ = y.exportJSON(),
					v = y.constructor;
				$.type !== v.getType() &&
					(0, C.default)(
						!1,
						"LexicalNode: Node %s does not implement .exportJSON().",
						v.name,
					);
				const S = $.children;
				return (
					(0, E.$isElementNode)(y) &&
						(Array.isArray(S) ||
							(0, C.default)(
								!1,
								"LexicalNode: Node %s is an element but .exportJSON() does not have a children array.",
								v.name,
							)),
					$
				);
			}
			function g(y, $, v, S = []) {
				let I = $ != null ? v.isSelected($) : !0;
				const T = (0, E.$isElementNode)(v) && v.excludeFromCopy("html");
				let P = v;
				if ($ !== null) {
					let D = (0, i.$cloneWithProperties)(v);
					(D =
						(0, E.$isTextNode)(D) && $ != null
							? (0, i.$sliceSelectedTextNodeContent)($, D)
							: D),
						(P = D);
				}
				const k = (0, E.$isElementNode)(P) ? P.getChildren() : [],
					L = n(P);
				if ((0, E.$isTextNode)(P)) {
					const D = P.__text;
					D.length > 0 ? (L.text = D) : (I = !1);
				}
				for (let D = 0; D < k.length; D++) {
					const M = k[D],
						N = g(y, $, M, L.children);
					!I &&
						(0, E.$isElementNode)(v) &&
						N &&
						v.extractWithChild(M, $, "clone") &&
						(I = !0);
				}
				if (I && !T) S.push(L);
				else if (Array.isArray(L.children))
					for (let D = 0; D < L.children.length; D++) {
						const M = L.children[D];
						S.push(M);
					}
				return I;
			}
			function p(y, $) {
				const v = [],
					I = (0, E.$getRoot)().getChildren();
				for (let T = 0; T < I.length; T++) {
					const P = I[T];
					g(y, $, P, v);
				}
				return { namespace: y._config.namespace, nodes: v };
			}
			function o(y) {
				const $ = [];
				for (let v = 0; v < y.length; v++) {
					const S = y[v],
						I = (0, E.$parseSerializedNode)(S);
					(0, E.$isTextNode)(I) && (0, i.$addNodeStyle)(I), $.push(I);
				}
				return $;
			}
			const f = 50;
			let b = null;
			async function s(y, $) {
				if (b !== null) return !1;
				if ($ !== null)
					return new Promise((P, k) => {
						y.update(() => {
							P(l(y, $));
						});
					});
				const v = y.getRootElement(),
					S = document.getSelection();
				if (v === null || S === null) return !1;
				const I = document.createElement("span");
				(I.style.cssText = "position: fixed; top: -1000px;"),
					I.append(document.createTextNode("#")),
					v.append(I);
				const T = new Range();
				return (
					T.setStart(I, 0),
					T.setEnd(I, 1),
					S.removeAllRanges(),
					S.addRange(T),
					new Promise((P, k) => {
						const L = y.registerCommand(
							E.COPY_COMMAND,
							(D) => (
								D instanceof ClipboardEvent &&
									(L(),
									b !== null && (window.clearTimeout(b), (b = null)),
									P(l(y, D))),
								!0
							),
							E.COMMAND_PRIORITY_CRITICAL,
						);
						(b = window.setTimeout(() => {
							L(), (b = null), P(!1);
						}, f)),
							document.execCommand("copy"),
							I.remove();
					})
				);
			}
			function l(y, $) {
				const v = window.getSelection();
				if (!v) return !1;
				const S = v.anchorNode,
					I = v.focusNode;
				if (
					S !== null &&
					I !== null &&
					!(0, E.isSelectionWithinEditor)(y, S, I)
				)
					return !1;
				$.preventDefault();
				const T = $.clipboardData,
					P = (0, E.$getSelection)();
				if (T === null || P === null) return !1;
				const k = d(y),
					L = m(y);
				let D = "";
				return (
					P !== null && (D = P.getTextContent()),
					k !== null && T.setData("text/html", k),
					L !== null && T.setData("application/x-lexical-editor", L),
					T.setData("text/plain", D),
					!0
				);
			}
		},
	),
		