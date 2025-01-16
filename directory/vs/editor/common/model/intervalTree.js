define(de[946], he([1, 0, 64]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$JU = e.$IU = e.$HU = e.NodeColor = e.ClassName = void 0),
				(e.$FU = C),
				(e.$GU = f),
				(e.$KU = v),
				(e.$LU = z),
				(e.$MU = x);
			var i;
			(function (H) {
				(H.EditorHintDecoration = "squiggly-hint"),
					(H.EditorInfoDecoration = "squiggly-info"),
					(H.EditorWarningDecoration = "squiggly-warning"),
					(H.EditorAIDecoration = "squiggly-ai"),
					(H.EditorErrorDecoration = "squiggly-error"),
					(H.EditorUnnecessaryDecoration = "squiggly-unnecessary"),
					(H.EditorUnnecessaryInlineDecoration = "squiggly-inline-unnecessary"),
					(H.EditorDeprecatedInlineDecoration = "squiggly-inline-deprecated");
			})(i || (e.ClassName = i = {}));
			var w;
			(function (H) {
				(H[(H.Black = 0)] = "Black"), (H[(H.Red = 1)] = "Red");
			})(w || (e.NodeColor = w = {}));
			var E;
			(function (H) {
				(H[(H.ColorMask = 1)] = "ColorMask"),
					(H[(H.ColorMaskInverse = 254)] = "ColorMaskInverse"),
					(H[(H.ColorOffset = 0)] = "ColorOffset"),
					(H[(H.IsVisitedMask = 2)] = "IsVisitedMask"),
					(H[(H.IsVisitedMaskInverse = 253)] = "IsVisitedMaskInverse"),
					(H[(H.IsVisitedOffset = 1)] = "IsVisitedOffset"),
					(H[(H.IsForValidationMask = 4)] = "IsForValidationMask"),
					(H[(H.IsForValidationMaskInverse = 251)] =
						"IsForValidationMaskInverse"),
					(H[(H.IsForValidationOffset = 2)] = "IsForValidationOffset"),
					(H[(H.StickinessMask = 24)] = "StickinessMask"),
					(H[(H.StickinessMaskInverse = 231)] = "StickinessMaskInverse"),
					(H[(H.StickinessOffset = 3)] = "StickinessOffset"),
					(H[(H.CollapseOnReplaceEditMask = 32)] = "CollapseOnReplaceEditMask"),
					(H[(H.CollapseOnReplaceEditMaskInverse = 223)] =
						"CollapseOnReplaceEditMaskInverse"),
					(H[(H.CollapseOnReplaceEditOffset = 5)] =
						"CollapseOnReplaceEditOffset"),
					(H[(H.IsMarginMask = 64)] = "IsMarginMask"),
					(H[(H.IsMarginMaskInverse = 191)] = "IsMarginMaskInverse"),
					(H[(H.IsMarginOffset = 6)] = "IsMarginOffset"),
					(H[(H.MIN_SAFE_DELTA = -1073741824)] = "MIN_SAFE_DELTA"),
					(H[(H.MAX_SAFE_DELTA = 1073741824)] = "MAX_SAFE_DELTA");
			})(E || (E = {}));
			function C(H) {
				return (H.metadata & E.ColorMask) >>> E.ColorOffset;
			}
			function d(H, q) {
				H.metadata = (H.metadata & E.ColorMaskInverse) | (q << E.ColorOffset);
			}
			function m(H) {
				return (H.metadata & E.IsVisitedMask) >>> E.IsVisitedOffset === 1;
			}
			function r(H, q) {
				H.metadata =
					(H.metadata & E.IsVisitedMaskInverse) |
					((q ? 1 : 0) << E.IsVisitedOffset);
			}
			function u(H) {
				return (
					(H.metadata & E.IsForValidationMask) >>> E.IsForValidationOffset === 1
				);
			}
			function a(H, q) {
				H.metadata =
					(H.metadata & E.IsForValidationMaskInverse) |
					((q ? 1 : 0) << E.IsForValidationOffset);
			}
			function h(H) {
				return (H.metadata & E.IsMarginMask) >>> E.IsMarginOffset === 1;
			}
			function c(H, q) {
				H.metadata =
					(H.metadata & E.IsMarginMaskInverse) |
					((q ? 1 : 0) << E.IsMarginOffset);
			}
			function n(H) {
				return (H.metadata & E.StickinessMask) >>> E.StickinessOffset;
			}
			function g(H, q) {
				H.metadata =
					(H.metadata & E.StickinessMaskInverse) | (q << E.StickinessOffset);
			}
			function p(H) {
				return (
					(H.metadata & E.CollapseOnReplaceEditMask) >>>
						E.CollapseOnReplaceEditOffset ===
					1
				);
			}
			function o(H, q) {
				H.metadata =
					(H.metadata & E.CollapseOnReplaceEditMaskInverse) |
					((q ? 1 : 0) << E.CollapseOnReplaceEditOffset);
			}
			function f(H, q) {
				g(H, q);
			}
			class b {
				constructor(q, V, G) {
					(this.metadata = 0),
						(this.parent = this),
						(this.left = this),
						(this.right = this),
						d(this, w.Red),
						(this.start = V),
						(this.end = G),
						(this.delta = 0),
						(this.maxEnd = G),
						(this.id = q),
						(this.ownerId = 0),
						(this.options = null),
						a(this, !1),
						c(this, !1),
						g(this, t.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges),
						o(this, !1),
						(this.cachedVersionId = 0),
						(this.cachedAbsoluteStart = V),
						(this.cachedAbsoluteEnd = G),
						(this.range = null),
						r(this, !1);
				}
				reset(q, V, G, K) {
					(this.start = V),
						(this.end = G),
						(this.maxEnd = G),
						(this.cachedVersionId = q),
						(this.cachedAbsoluteStart = V),
						(this.cachedAbsoluteEnd = G),
						(this.range = K);
				}
				setOptions(q) {
					this.options = q;
					const V = this.options.className;
					a(
						this,
						V === i.EditorErrorDecoration ||
							V === i.EditorWarningDecoration ||
							V === i.EditorInfoDecoration,
					),
						c(this, this.options.glyphMarginClassName !== null),
						g(this, this.options.stickiness),
						o(this, this.options.collapseOnReplaceEdit);
				}
				setCachedOffsets(q, V, G) {
					this.cachedVersionId !== G && (this.range = null),
						(this.cachedVersionId = G),
						(this.cachedAbsoluteStart = q),
						(this.cachedAbsoluteEnd = V);
				}
				detach() {
					(this.parent = null), (this.left = null), (this.right = null);
				}
			}
			(e.$HU = b),
				(e.$IU = new b(null, 0, 0)),
				(e.$IU.parent = e.$IU),
				(e.$IU.left = e.$IU),
				(e.$IU.right = e.$IU),
				d(e.$IU, w.Black);
			class s {
				constructor() {
					(this.root = e.$IU), (this.requestNormalizeDelta = !1);
				}
				intervalSearch(q, V, G, K, J, W) {
					return this.root === e.$IU ? [] : L(this, q, V, G, K, J, W);
				}
				search(q, V, G, K) {
					return this.root === e.$IU ? [] : k(this, q, V, G, K);
				}
				collectNodesFromOwner(q) {
					return T(this, q);
				}
				collectNodesPostOrder() {
					return P(this);
				}
				insert(q) {
					D(this, q), this.a();
				}
				delete(q) {
					N(this, q), this.a();
				}
				resolveNode(q, V) {
					const G = q;
					let K = 0;
					for (; q !== this.root; )
						q === q.parent.right && (K += q.parent.delta), (q = q.parent);
					const J = G.start + K,
						W = G.end + K;
					G.setCachedOffsets(J, W, V);
				}
				acceptReplace(q, V, G, K) {
					const J = S(this, q, q + V);
					for (let W = 0, X = J.length; W < X; W++) {
						const Y = J[W];
						N(this, Y);
					}
					this.a(), I(this, q, q + V, G), this.a();
					for (let W = 0, X = J.length; W < X; W++) {
						const Y = J[W];
						(Y.start = Y.cachedAbsoluteStart),
							(Y.end = Y.cachedAbsoluteEnd),
							v(Y, q, q + V, G, K),
							(Y.maxEnd = Y.end),
							D(this, Y);
					}
					this.a();
				}
				getAllInOrder() {
					return k(this, 0, !1, 0, !1);
				}
				a() {
					this.requestNormalizeDelta &&
						((this.requestNormalizeDelta = !1), l(this));
				}
			}
			e.$JU = s;
			function l(H) {
				let q = H.root,
					V = 0;
				for (; q !== e.$IU; ) {
					if (q.left !== e.$IU && !m(q.left)) {
						q = q.left;
						continue;
					}
					if (q.right !== e.$IU && !m(q.right)) {
						(V += q.delta), (q = q.right);
						continue;
					}
					(q.start = V + q.start),
						(q.end = V + q.end),
						(q.delta = 0),
						z(q),
						r(q, !0),
						r(q.left, !1),
						r(q.right, !1),
						q === q.parent.right && (V -= q.parent.delta),
						(q = q.parent);
				}
				r(H.root, !1);
			}
			var y;
			(function (H) {
				(H[(H.MarkerDefined = 0)] = "MarkerDefined"),
					(H[(H.ForceMove = 1)] = "ForceMove"),
					(H[(H.ForceStay = 2)] = "ForceStay");
			})(y || (y = {}));
			function $(H, q, V, G) {
				return H < V
					? !0
					: H > V || G === y.ForceMove
						? !1
						: G === y.ForceStay
							? !0
							: q;
			}
			function v(H, q, V, G, K) {
				const J = n(H),
					W =
						J === t.TrackedRangeStickiness.AlwaysGrowsWhenTypingAtEdges ||
						J === t.TrackedRangeStickiness.GrowsOnlyWhenTypingBefore,
					X =
						J === t.TrackedRangeStickiness.NeverGrowsWhenTypingAtEdges ||
						J === t.TrackedRangeStickiness.GrowsOnlyWhenTypingBefore,
					Y = V - q,
					ie = G,
					ne = Math.min(Y, ie),
					ee = H.start;
				let _ = !1;
				const te = H.end;
				let Q = !1;
				q <= ee &&
					te <= V &&
					p(H) &&
					((H.start = q), (_ = !0), (H.end = q), (Q = !0));
				{
					const se = K ? y.ForceMove : Y > 0 ? y.ForceStay : y.MarkerDefined;
					!_ && $(ee, W, q, se) && (_ = !0), !Q && $(te, X, q, se) && (Q = !0);
				}
				if (ne > 0 && !K) {
					const se = Y > ie ? y.ForceStay : y.MarkerDefined;
					!_ && $(ee, W, q + ne, se) && (_ = !0),
						!Q && $(te, X, q + ne, se) && (Q = !0);
				}
				{
					const se = K ? y.ForceMove : y.MarkerDefined;
					!_ && $(ee, W, V, se) && ((H.start = q + ie), (_ = !0)),
						!Q && $(te, X, V, se) && ((H.end = q + ie), (Q = !0));
				}
				const Z = ie - Y;
				_ || (H.start = Math.max(0, ee + Z)),
					Q || (H.end = Math.max(0, te + Z)),
					H.start > H.end && (H.end = H.start);
			}
			function S(H, q, V) {
				let G = H.root,
					K = 0,
					J = 0,
					W = 0,
					X = 0;
				const Y = [];
				let ie = 0;
				for (; G !== e.$IU; ) {
					if (m(G)) {
						r(G.left, !1),
							r(G.right, !1),
							G === G.parent.right && (K -= G.parent.delta),
							(G = G.parent);
						continue;
					}
					if (!m(G.left)) {
						if (((J = K + G.maxEnd), J < q)) {
							r(G, !0);
							continue;
						}
						if (G.left !== e.$IU) {
							G = G.left;
							continue;
						}
					}
					if (((W = K + G.start), W > V)) {
						r(G, !0);
						continue;
					}
					if (
						((X = K + G.end),
						X >= q && (G.setCachedOffsets(W, X, 0), (Y[ie++] = G)),
						r(G, !0),
						G.right !== e.$IU && !m(G.right))
					) {
						(K += G.delta), (G = G.right);
						continue;
					}
				}
				return r(H.root, !1), Y;
			}
			function I(H, q, V, G) {
				let K = H.root,
					J = 0,
					W = 0,
					X = 0;
				const Y = G - (V - q);
				for (; K !== e.$IU; ) {
					if (m(K)) {
						r(K.left, !1),
							r(K.right, !1),
							K === K.parent.right && (J -= K.parent.delta),
							z(K),
							(K = K.parent);
						continue;
					}
					if (!m(K.left)) {
						if (((W = J + K.maxEnd), W < q)) {
							r(K, !0);
							continue;
						}
						if (K.left !== e.$IU) {
							K = K.left;
							continue;
						}
					}
					if (((X = J + K.start), X > V)) {
						(K.start += Y),
							(K.end += Y),
							(K.delta += Y),
							(K.delta < E.MIN_SAFE_DELTA || K.delta > E.MAX_SAFE_DELTA) &&
								(H.requestNormalizeDelta = !0),
							r(K, !0);
						continue;
					}
					if ((r(K, !0), K.right !== e.$IU && !m(K.right))) {
						(J += K.delta), (K = K.right);
						continue;
					}
				}
				r(H.root, !1);
			}
			function T(H, q) {
				let V = H.root;
				const G = [];
				let K = 0;
				for (; V !== e.$IU; ) {
					if (m(V)) {
						r(V.left, !1), r(V.right, !1), (V = V.parent);
						continue;
					}
					if (V.left !== e.$IU && !m(V.left)) {
						V = V.left;
						continue;
					}
					if (
						(V.ownerId === q && (G[K++] = V),
						r(V, !0),
						V.right !== e.$IU && !m(V.right))
					) {
						V = V.right;
						continue;
					}
				}
				return r(H.root, !1), G;
			}
			function P(H) {
				let q = H.root;
				const V = [];
				let G = 0;
				for (; q !== e.$IU; ) {
					if (m(q)) {
						r(q.left, !1), r(q.right, !1), (q = q.parent);
						continue;
					}
					if (q.left !== e.$IU && !m(q.left)) {
						q = q.left;
						continue;
					}
					if (q.right !== e.$IU && !m(q.right)) {
						q = q.right;
						continue;
					}
					(V[G++] = q), r(q, !0);
				}
				return r(H.root, !1), V;
			}
			function k(H, q, V, G, K) {
				let J = H.root,
					W = 0,
					X = 0,
					Y = 0;
				const ie = [];
				let ne = 0;
				for (; J !== e.$IU; ) {
					if (m(J)) {
						r(J.left, !1),
							r(J.right, !1),
							J === J.parent.right && (W -= J.parent.delta),
							(J = J.parent);
						continue;
					}
					if (J.left !== e.$IU && !m(J.left)) {
						J = J.left;
						continue;
					}
					(X = W + J.start), (Y = W + J.end), J.setCachedOffsets(X, Y, G);
					let ee = !0;
					if (
						(q && J.ownerId && J.ownerId !== q && (ee = !1),
						V && u(J) && (ee = !1),
						K && !h(J) && (ee = !1),
						ee && (ie[ne++] = J),
						r(J, !0),
						J.right !== e.$IU && !m(J.right))
					) {
						(W += J.delta), (J = J.right);
						continue;
					}
				}
				return r(H.root, !1), ie;
			}
			function L(H, q, V, G, K, J, W) {
				let X = H.root,
					Y = 0,
					ie = 0,
					ne = 0,
					ee = 0;
				const _ = [];
				let te = 0;
				for (; X !== e.$IU; ) {
					if (m(X)) {
						r(X.left, !1),
							r(X.right, !1),
							X === X.parent.right && (Y -= X.parent.delta),
							(X = X.parent);
						continue;
					}
					if (!m(X.left)) {
						if (((ie = Y + X.maxEnd), ie < q)) {
							r(X, !0);
							continue;
						}
						if (X.left !== e.$IU) {
							X = X.left;
							continue;
						}
					}
					if (((ne = Y + X.start), ne > V)) {
						r(X, !0);
						continue;
					}
					if (((ee = Y + X.end), ee >= q)) {
						X.setCachedOffsets(ne, ee, J);
						let Q = !0;
						G && X.ownerId && X.ownerId !== G && (Q = !1),
							K && u(X) && (Q = !1),
							W && !h(X) && (Q = !1),
							Q && (_[te++] = X);
					}
					if ((r(X, !0), X.right !== e.$IU && !m(X.right))) {
						(Y += X.delta), (X = X.right);
						continue;
					}
				}
				return r(H.root, !1), _;
			}
			function D(H, q) {
				if (H.root === e.$IU)
					return (
						(q.parent = e.$IU),
						(q.left = e.$IU),
						(q.right = e.$IU),
						d(q, w.Black),
						(H.root = q),
						H.root
					);
				M(H, q), F(q.parent);
				let V = q;
				for (; V !== H.root && C(V.parent) === w.Red; )
					if (V.parent === V.parent.parent.left) {
						const G = V.parent.parent.right;
						C(G) === w.Red
							? (d(V.parent, w.Black),
								d(G, w.Black),
								d(V.parent.parent, w.Red),
								(V = V.parent.parent))
							: (V === V.parent.right && ((V = V.parent), O(H, V)),
								d(V.parent, w.Black),
								d(V.parent.parent, w.Red),
								B(H, V.parent.parent));
					} else {
						const G = V.parent.parent.left;
						C(G) === w.Red
							? (d(V.parent, w.Black),
								d(G, w.Black),
								d(V.parent.parent, w.Red),
								(V = V.parent.parent))
							: (V === V.parent.left && ((V = V.parent), B(H, V)),
								d(V.parent, w.Black),
								d(V.parent.parent, w.Red),
								O(H, V.parent.parent));
					}
				return d(H.root, w.Black), q;
			}
			function M(H, q) {
				let V = 0,
					G = H.root;
				const K = q.start,
					J = q.end;
				for (;;)
					if (x(K, J, G.start + V, G.end + V) < 0)
						if (G.left === e.$IU) {
							(q.start -= V), (q.end -= V), (q.maxEnd -= V), (G.left = q);
							break;
						} else G = G.left;
					else if (G.right === e.$IU) {
						(q.start -= V + G.delta),
							(q.end -= V + G.delta),
							(q.maxEnd -= V + G.delta),
							(G.right = q);
						break;
					} else (V += G.delta), (G = G.right);
				(q.parent = G), (q.left = e.$IU), (q.right = e.$IU), d(q, w.Red);
			}
			function N(H, q) {
				let V, G;
				if (
					(q.left === e.$IU
						? ((V = q.right),
							(G = q),
							(V.delta += q.delta),
							(V.delta < E.MIN_SAFE_DELTA || V.delta > E.MAX_SAFE_DELTA) &&
								(H.requestNormalizeDelta = !0),
							(V.start += q.delta),
							(V.end += q.delta))
						: q.right === e.$IU
							? ((V = q.left), (G = q))
							: ((G = A(q.right)),
								(V = G.right),
								(V.start += G.delta),
								(V.end += G.delta),
								(V.delta += G.delta),
								(V.delta < E.MIN_SAFE_DELTA || V.delta > E.MAX_SAFE_DELTA) &&
									(H.requestNormalizeDelta = !0),
								(G.start += q.delta),
								(G.end += q.delta),
								(G.delta = q.delta),
								(G.delta < E.MIN_SAFE_DELTA || G.delta > E.MAX_SAFE_DELTA) &&
									(H.requestNormalizeDelta = !0)),
					G === H.root)
				) {
					(H.root = V),
						d(V, w.Black),
						q.detach(),
						R(),
						z(V),
						(H.root.parent = e.$IU);
					return;
				}
				const K = C(G) === w.Red;
				if (
					(G === G.parent.left ? (G.parent.left = V) : (G.parent.right = V),
					G === q
						? (V.parent = G.parent)
						: (G.parent === q ? (V.parent = G) : (V.parent = G.parent),
							(G.left = q.left),
							(G.right = q.right),
							(G.parent = q.parent),
							d(G, C(q)),
							q === H.root
								? (H.root = G)
								: q === q.parent.left
									? (q.parent.left = G)
									: (q.parent.right = G),
							G.left !== e.$IU && (G.left.parent = G),
							G.right !== e.$IU && (G.right.parent = G)),
					q.detach(),
					K)
				) {
					F(V.parent), G !== q && (F(G), F(G.parent)), R();
					return;
				}
				F(V), F(V.parent), G !== q && (F(G), F(G.parent));
				let J;
				for (; V !== H.root && C(V) === w.Black; )
					V === V.parent.left
						? ((J = V.parent.right),
							C(J) === w.Red &&
								(d(J, w.Black),
								d(V.parent, w.Red),
								O(H, V.parent),
								(J = V.parent.right)),
							C(J.left) === w.Black && C(J.right) === w.Black
								? (d(J, w.Red), (V = V.parent))
								: (C(J.right) === w.Black &&
										(d(J.left, w.Black),
										d(J, w.Red),
										B(H, J),
										(J = V.parent.right)),
									d(J, C(V.parent)),
									d(V.parent, w.Black),
									d(J.right, w.Black),
									O(H, V.parent),
									(V = H.root)))
						: ((J = V.parent.left),
							C(J) === w.Red &&
								(d(J, w.Black),
								d(V.parent, w.Red),
								B(H, V.parent),
								(J = V.parent.left)),
							C(J.left) === w.Black && C(J.right) === w.Black
								? (d(J, w.Red), (V = V.parent))
								: (C(J.left) === w.Black &&
										(d(J.right, w.Black),
										d(J, w.Red),
										O(H, J),
										(J = V.parent.left)),
									d(J, C(V.parent)),
									d(V.parent, w.Black),
									d(J.left, w.Black),
									B(H, V.parent),
									(V = H.root)));
				d(V, w.Black), R();
			}
			function A(H) {
				for (; H.left !== e.$IU; ) H = H.left;
				return H;
			}
			function R() {
				(e.$IU.parent = e.$IU),
					(e.$IU.delta = 0),
					(e.$IU.start = 0),
					(e.$IU.end = 0);
			}
			function O(H, q) {
				const V = q.right;
				(V.delta += q.delta),
					(V.delta < E.MIN_SAFE_DELTA || V.delta > E.MAX_SAFE_DELTA) &&
						(H.requestNormalizeDelta = !0),
					(V.start += q.delta),
					(V.end += q.delta),
					(q.right = V.left),
					V.left !== e.$IU && (V.left.parent = q),
					(V.parent = q.parent),
					q.parent === e.$IU
						? (H.root = V)
						: q === q.parent.left
							? (q.parent.left = V)
							: (q.parent.right = V),
					(V.left = q),
					(q.parent = V),
					z(q),
					z(V);
			}
			function B(H, q) {
				const V = q.left;
				(q.delta -= V.delta),
					(q.delta < E.MIN_SAFE_DELTA || q.delta > E.MAX_SAFE_DELTA) &&
						(H.requestNormalizeDelta = !0),
					(q.start -= V.delta),
					(q.end -= V.delta),
					(q.left = V.right),
					V.right !== e.$IU && (V.right.parent = q),
					(V.parent = q.parent),
					q.parent === e.$IU
						? (H.root = V)
						: q === q.parent.right
							? (q.parent.right = V)
							: (q.parent.left = V),
					(V.right = q),
					(q.parent = V),
					z(q),
					z(V);
			}
			function U(H) {
				let q = H.end;
				if (H.left !== e.$IU) {
					const V = H.left.maxEnd;
					V > q && (q = V);
				}
				if (H.right !== e.$IU) {
					const V = H.right.maxEnd + H.delta;
					V > q && (q = V);
				}
				return q;
			}
			function z(H) {
				H.maxEnd = U(H);
			}
			function F(H) {
				for (; H !== e.$IU; ) {
					const q = U(H);
					if (H.maxEnd === q) return;
					(H.maxEnd = q), (H = H.parent);
				}
			}
			function x(H, q, V, G) {
				return H === V ? q - G : H - V;
			}
		}),
		define(
			de[543],
			he([1, 0, 120, 37, 747, 48, 17, 64]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$3U = e.$1U = e.$XU = void 0),
					(e.$YU = u),
					(e.$ZU = a),
					(e.$2U = p),
					(i = mt(i));
				const m = 999;
				class r {
					constructor(b, s, l, y) {
						(this.searchString = b),
							(this.isRegex = s),
							(this.matchCase = l),
							(this.wordSeparators = y);
					}
					parseSearchRequest() {
						if (this.searchString === "") return null;
						let b;
						this.isRegex
							? (b = u(this.searchString))
							: (b =
									this.searchString.indexOf(`
`) >= 0);
						let s = null;
						try {
							s = i.$xf(this.searchString, this.isRegex, {
								matchCase: this.matchCase,
								wholeWord: !1,
								multiline: b,
								global: !0,
								unicode: !0,
							});
						} catch {
							return null;
						}
						if (!s) return null;
						let l = !this.isRegex && !b;
						return (
							l &&
								this.searchString.toLowerCase() !==
									this.searchString.toUpperCase() &&
								(l = this.matchCase),
							new d.$RN(
								s,
								this.wordSeparators
									? (0, w.$QL)(this.wordSeparators, [])
									: null,
								l ? this.searchString : null,
							)
						);
					}
				}
				e.$XU = r;
				function u(f) {
					if (!f || f.length === 0) return !1;
					for (let b = 0, s = f.length; b < s; b++) {
						const l = f.charCodeAt(b);
						if (l === t.CharCode.LineFeed) return !0;
						if (l === t.CharCode.Backslash) {
							if ((b++, b >= s)) break;
							const y = f.charCodeAt(b);
							if (
								y === t.CharCode.n ||
								y === t.CharCode.r ||
								y === t.CharCode.W
							)
								return !0;
						}
					}
					return !1;
				}
				function a(f, b, s) {
					if (!s) return new d.$MN(f, null);
					const l = [];
					for (let y = 0, $ = b.length; y < $; y++) l[y] = b[y];
					return new d.$MN(f, l);
				}
				class h {
					constructor(b) {
						const s = [];
						let l = 0;
						for (let y = 0, $ = b.length; y < $; y++)
							b.charCodeAt(y) === t.CharCode.LineFeed && (s[l++] = y);
						this.a = s;
					}
					findLineFeedCountBeforeOffset(b) {
						const s = this.a;
						let l = 0,
							y = s.length - 1;
						if (y === -1 || b <= s[0]) return 0;
						for (; l < y; ) {
							const $ = l + (((y - l) / 2) >> 0);
							s[$] >= b
								? (y = $ - 1)
								: s[$ + 1] >= b
									? ((l = $), (y = $))
									: (l = $ + 1);
						}
						return l + 1;
					}
				}
				class c {
					static findMatches(b, s, l, y, $) {
						const v = s.parseSearchRequest();
						return v
							? v.regex.multiline
								? this.b(b, l, new o(v.wordSeparators, v.regex), y, $)
								: this.c(b, l, v, y, $)
							: [];
					}
					static a(b, s, l, y, $, v) {
						let S,
							I = 0;
						y
							? ((I = y.findLineFeedCountBeforeOffset($)), (S = s + $ + I))
							: (S = s + $);
						let T;
						if (y) {
							const D = y.findLineFeedCountBeforeOffset($ + v.length) - I;
							T = S + v.length + D;
						} else T = S + v.length;
						const P = b.getPositionAt(S),
							k = b.getPositionAt(T);
						return new C.$iL(P.lineNumber, P.column, k.lineNumber, k.column);
					}
					static b(b, s, l, y, $) {
						const v = b.getOffsetAt(s.getStartPosition()),
							S = b.getValueInRange(s, d.EndOfLinePreference.LF),
							I =
								b.getEOL() ===
								`\r
`
									? new h(S)
									: null,
							T = [];
						let P = 0,
							k;
						for (l.reset(0); (k = l.next(S)); )
							if (
								((T[P++] = a(this.a(b, v, S, I, k.index, k[0]), k, y)), P >= $)
							)
								return T;
						return T;
					}
					static c(b, s, l, y, $) {
						const v = [];
						let S = 0;
						if (s.startLineNumber === s.endLineNumber) {
							const T = b
								.getLineContent(s.startLineNumber)
								.substring(s.startColumn - 1, s.endColumn - 1);
							return (
								(S = this.d(
									l,
									T,
									s.startLineNumber,
									s.startColumn - 1,
									S,
									v,
									y,
									$,
								)),
								v
							);
						}
						const I = b
							.getLineContent(s.startLineNumber)
							.substring(s.startColumn - 1);
						S = this.d(l, I, s.startLineNumber, s.startColumn - 1, S, v, y, $);
						for (
							let T = s.startLineNumber + 1;
							T < s.endLineNumber && S < $;
							T++
						)
							S = this.d(l, b.getLineContent(T), T, 0, S, v, y, $);
						if (S < $) {
							const T = b
								.getLineContent(s.endLineNumber)
								.substring(0, s.endColumn - 1);
							S = this.d(l, T, s.endLineNumber, 0, S, v, y, $);
						}
						return v;
					}
					static d(b, s, l, y, $, v, S, I) {
						const T = b.wordSeparators;
						if (!S && b.simpleSearch) {
							const L = b.simpleSearch,
								D = L.length,
								M = s.length;
							let N = -D;
							for (; (N = s.indexOf(L, N + D)) !== -1; )
								if (
									(!T || p(T, s, M, N, D)) &&
									((v[$++] = new d.$MN(
										new C.$iL(l, N + 1 + y, l, N + 1 + D + y),
										null,
									)),
									$ >= I)
								)
									return $;
							return $;
						}
						const P = new o(b.wordSeparators, b.regex);
						let k;
						P.reset(0);
						do
							if (
								((k = P.next(s)),
								k &&
									((v[$++] = a(
										new C.$iL(
											l,
											k.index + 1 + y,
											l,
											k.index + 1 + k[0].length + y,
										),
										k,
										S,
									)),
									$ >= I))
							)
								return $;
						while (k);
						return $;
					}
					static findNextMatch(b, s, l, y) {
						const $ = s.parseSearchRequest();
						if (!$) return null;
						const v = new o($.wordSeparators, $.regex);
						return $.regex.multiline ? this.e(b, l, v, y) : this.f(b, l, v, y);
					}
					static e(b, s, l, y) {
						const $ = new E.$hL(s.lineNumber, 1),
							v = b.getOffsetAt($),
							S = b.getLineCount(),
							I = b.getValueInRange(
								new C.$iL($.lineNumber, $.column, S, b.getLineMaxColumn(S)),
								d.EndOfLinePreference.LF,
							),
							T =
								b.getEOL() ===
								`\r
`
									? new h(I)
									: null;
						l.reset(s.column - 1);
						const P = l.next(I);
						return P
							? a(this.a(b, v, I, T, P.index, P[0]), P, y)
							: s.lineNumber !== 1 || s.column !== 1
								? this.e(b, new E.$hL(1, 1), l, y)
								: null;
					}
					static f(b, s, l, y) {
						const $ = b.getLineCount(),
							v = s.lineNumber,
							S = b.getLineContent(v),
							I = this.g(l, S, v, s.column, y);
						if (I) return I;
						for (let T = 1; T <= $; T++) {
							const P = (v + T - 1) % $,
								k = b.getLineContent(P + 1),
								L = this.g(l, k, P + 1, 1, y);
							if (L) return L;
						}
						return null;
					}
					static g(b, s, l, y, $) {
						b.reset(y - 1);
						const v = b.next(s);
						return v
							? a(new C.$iL(l, v.index + 1, l, v.index + 1 + v[0].length), v, $)
							: null;
					}
					static findPreviousMatch(b, s, l, y) {
						const $ = s.parseSearchRequest();
						if (!$) return null;
						const v = new o($.wordSeparators, $.regex);
						return $.regex.multiline ? this.h(b, l, v, y) : this.j(b, l, v, y);
					}
					static h(b, s, l, y) {
						const $ = this.b(
							b,
							new C.$iL(1, 1, s.lineNumber, s.column),
							l,
							y,
							10 * m,
						);
						if ($.length > 0) return $[$.length - 1];
						const v = b.getLineCount();
						return s.lineNumber !== v || s.column !== b.getLineMaxColumn(v)
							? this.h(b, new E.$hL(v, b.getLineMaxColumn(v)), l, y)
							: null;
					}
					static j(b, s, l, y) {
						const $ = b.getLineCount(),
							v = s.lineNumber,
							S = b.getLineContent(v).substring(0, s.column - 1),
							I = this.k(l, S, v, y);
						if (I) return I;
						for (let T = 1; T <= $; T++) {
							const P = ($ + v - T - 1) % $,
								k = b.getLineContent(P + 1),
								L = this.k(l, k, P + 1, y);
							if (L) return L;
						}
						return null;
					}
					static k(b, s, l, y) {
						let $ = null,
							v;
						for (b.reset(0); (v = b.next(s)); )
							$ = a(
								new C.$iL(l, v.index + 1, l, v.index + 1 + v[0].length),
								v,
								y,
							);
						return $;
					}
				}
				e.$1U = c;
				function n(f, b, s, l, y) {
					if (l === 0) return !0;
					const $ = b.charCodeAt(l - 1);
					if (
						f.get($) !== w.WordCharacterClass.Regular ||
						$ === t.CharCode.CarriageReturn ||
						$ === t.CharCode.LineFeed
					)
						return !0;
					if (y > 0) {
						const v = b.charCodeAt(l);
						if (f.get(v) !== w.WordCharacterClass.Regular) return !0;
					}
					return !1;
				}
				function g(f, b, s, l, y) {
					if (l + y === s) return !0;
					const $ = b.charCodeAt(l + y);
					if (
						f.get($) !== w.WordCharacterClass.Regular ||
						$ === t.CharCode.CarriageReturn ||
						$ === t.CharCode.LineFeed
					)
						return !0;
					if (y > 0) {
						const v = b.charCodeAt(l + y - 1);
						if (f.get(v) !== w.WordCharacterClass.Regular) return !0;
					}
					return !1;
				}
				function p(f, b, s, l, y) {
					return n(f, b, s, l, y) && g(f, b, s, l, y);
				}
				class o {
					constructor(b, s) {
						(this._wordSeparators = b),
							(this.a = s),
							(this.b = -1),
							(this.c = 0);
					}
					reset(b) {
						(this.a.lastIndex = b), (this.b = -1), (this.c = 0);
					}
					next(b) {
						const s = b.length;
						let l;
						do {
							if (this.b + this.c === s || ((l = this.a.exec(b)), !l))
								return null;
							const y = l.index,
								$ = l[0].length;
							if (y === this.b && $ === this.c) {
								if ($ === 0) {
									i.$Tf(b, s, this.a.lastIndex) > 65535
										? (this.a.lastIndex += 2)
										: (this.a.lastIndex += 1);
									continue;
								}
								return null;
							}
							if (
								((this.b = y),
								(this.c = $),
								!this._wordSeparators || p(this._wordSeparators, b, s, y, $))
							)
								return l;
						} while (l);
						return null;
					}
				}
				e.$3U = o;
			},
		),
		define(
			de[1628],
			he([1, 0, 120, 48, 17, 64, 2567, 543]),
			function (ce, e, t, i, w, E, C, d) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$8U = e.$7U = e.$6U = void 0),
					(e.$4U = a),
					(e.$5U = h);
				const m = 65535;
				function r(f) {
					let b;
					return (
						f[f.length - 1] < 65536
							? (b = new Uint16Array(f.length))
							: (b = new Uint32Array(f.length)),
						b.set(f, 0),
						b
					);
				}
				class u {
					constructor(b, s, l, y, $) {
						(this.lineStarts = b),
							(this.cr = s),
							(this.lf = l),
							(this.crlf = y),
							(this.isBasicASCII = $);
					}
				}
				function a(f, b = !0) {
					const s = [0];
					let l = 1;
					for (let y = 0, $ = f.length; y < $; y++) {
						const v = f.charCodeAt(y);
						v === t.CharCode.CarriageReturn
							? y + 1 < $ && f.charCodeAt(y + 1) === t.CharCode.LineFeed
								? ((s[l++] = y + 2), y++)
								: (s[l++] = y + 1)
							: v === t.CharCode.LineFeed && (s[l++] = y + 1);
					}
					return b ? r(s) : s;
				}
				function h(f, b) {
					(f.length = 0), (f[0] = 0);
					let s = 1,
						l = 0,
						y = 0,
						$ = 0,
						v = !0;
					for (let I = 0, T = b.length; I < T; I++) {
						const P = b.charCodeAt(I);
						P === t.CharCode.CarriageReturn
							? I + 1 < T && b.charCodeAt(I + 1) === t.CharCode.LineFeed
								? ($++, (f[s++] = I + 2), I++)
								: (l++, (f[s++] = I + 1))
							: P === t.CharCode.LineFeed
								? (y++, (f[s++] = I + 1))
								: v && P !== t.CharCode.Tab && (P < 32 || P > 126) && (v = !1);
					}
					const S = new u(r(f), l, y, $, v);
					return (f.length = 0), S;
				}
				class c {
					constructor(b, s, l, y, $) {
						(this.bufferIndex = b),
							(this.start = s),
							(this.end = l),
							(this.lineFeedCnt = y),
							(this.length = $);
					}
				}
				e.$6U = c;
				class n {
					constructor(b, s) {
						(this.buffer = b), (this.lineStarts = s);
					}
				}
				e.$7U = n;
				class g {
					constructor(b, s) {
						(this.a = []),
							(this.c = b),
							(this.d = s),
							(this.b = 0),
							b.root !== C.$OU &&
								b.iterate(
									b.root,
									(l) => (l !== C.$OU && this.a.push(l.piece), !0),
								);
					}
					read() {
						return this.a.length === 0
							? this.b === 0
								? (this.b++, this.d)
								: null
							: this.b > this.a.length - 1
								? null
								: this.b === 0
									? this.d + this.c.getPieceContent(this.a[this.b++])
									: this.c.getPieceContent(this.a[this.b++]);
					}
				}
				class p {
					constructor(b) {
						(this.a = b), (this.b = []);
					}
					get(b) {
						for (let s = this.b.length - 1; s >= 0; s--) {
							const l = this.b[s];
							if (
								l.nodeStartOffset <= b &&
								l.nodeStartOffset + l.node.piece.length >= b
							)
								return l;
						}
						return null;
					}
					get2(b) {
						for (let s = this.b.length - 1; s >= 0; s--) {
							const l = this.b[s];
							if (
								l.nodeStartLineNumber &&
								l.nodeStartLineNumber < b &&
								l.nodeStartLineNumber + l.node.piece.lineFeedCnt >= b
							)
								return l;
						}
						return null;
					}
					set(b) {
						this.b.length >= this.a && this.b.shift(), this.b.push(b);
					}
					validate(b) {
						let s = !1;
						const l = this.b;
						for (let y = 0; y < l.length; y++) {
							const $ = l[y];
							if ($.node.parent === null || $.nodeStartOffset >= b) {
								(l[y] = null), (s = !0);
								continue;
							}
						}
						if (s) {
							const y = [];
							for (const $ of l) $ !== null && y.push($);
							this.b = y;
						}
					}
				}
				class o {
					constructor(b, s, l) {
						this.create(b, s, l);
					}
					create(b, s, l) {
						(this.a = [new n("", [0])]),
							(this.g = { line: 0, column: 0 }),
							(this.root = C.$OU),
							(this.b = 1),
							(this.c = 0),
							(this.d = s),
							(this.e = s.length),
							(this.f = l);
						let y = null;
						for (let $ = 0, v = b.length; $ < v; $++)
							if (b[$].buffer.length > 0) {
								b[$].lineStarts || (b[$].lineStarts = a(b[$].buffer));
								const S = new c(
									$ + 1,
									{ line: 0, column: 0 },
									{
										line: b[$].lineStarts.length - 1,
										column:
											b[$].buffer.length -
											b[$].lineStarts[b[$].lineStarts.length - 1],
									},
									b[$].lineStarts.length - 1,
									b[$].buffer.length,
								);
								this.a.push(b[$]), (y = this.S(y, S));
							}
						(this.h = new p(1)),
							(this.j = { lineNumber: 0, value: "" }),
							this.y();
					}
					normalizeEOL(b) {
						const s = m,
							l = s - Math.floor(s / 3),
							y = l * 2;
						let $ = "",
							v = 0;
						const S = [];
						if (
							(this.iterate(this.root, (I) => {
								const T = this.R(I),
									P = T.length;
								if (v <= l || v + P < y) return ($ += T), (v += P), !0;
								const k = $.replace(/\r\n|\r|\n/g, b);
								return S.push(new n(k, a(k))), ($ = T), (v = P), !0;
							}),
							v > 0)
						) {
							const I = $.replace(/\r\n|\r|\n/g, b);
							S.push(new n(I, a(I)));
						}
						this.create(S, b, !0);
					}
					getEOL() {
						return this.d;
					}
					setEOL(b) {
						(this.d = b), (this.e = this.d.length), this.normalizeEOL(b);
					}
					createSnapshot(b) {
						return new g(this, b);
					}
					equal(b) {
						if (
							this.getLength() !== b.getLength() ||
							this.getLineCount() !== b.getLineCount()
						)
							return !1;
						let s = 0;
						return this.iterate(this.root, (y) => {
							if (y === C.$OU) return !0;
							const $ = this.R(y),
								v = $.length,
								S = b.G(s),
								I = b.G(s + v),
								T = b.getValueInRange2(S, I);
							return (s += v), $ === T;
						});
					}
					getOffsetAt(b, s) {
						let l = 0,
							y = this.root;
						for (; y !== C.$OU; )
							if (y.left !== C.$OU && y.lf_left + 1 >= b) y = y.left;
							else if (y.lf_left + y.piece.lineFeedCnt + 1 >= b) {
								l += y.size_left;
								const $ = this.B(y, b - y.lf_left - 2);
								return (l += $ + s - 1);
							} else
								(b -= y.lf_left + y.piece.lineFeedCnt),
									(l += y.size_left + y.piece.length),
									(y = y.right);
						return l;
					}
					getPositionAt(b) {
						(b = Math.floor(b)), (b = Math.max(0, b));
						let s = this.root,
							l = 0;
						const y = b;
						for (; s !== C.$OU; )
							if (s.size_left !== 0 && s.size_left >= b) s = s.left;
							else if (s.size_left + s.piece.length >= b) {
								const $ = this.A(s, b - s.size_left);
								if (((l += s.lf_left + $.index), $.index === 0)) {
									const v = this.getOffsetAt(l + 1, 1),
										S = y - v;
									return new i.$hL(l + 1, S + 1);
								}
								return new i.$hL(l + 1, $.remainder + 1);
							} else if (
								((b -= s.size_left + s.piece.length),
								(l += s.lf_left + s.piece.lineFeedCnt),
								s.right === C.$OU)
							) {
								const $ = this.getOffsetAt(l + 1, 1),
									v = y - b - $;
								return new i.$hL(l + 1, v + 1);
							} else s = s.right;
						return new i.$hL(1, 1);
					}
					getValueInRange(b, s) {
						if (
							b.startLineNumber === b.endLineNumber &&
							b.startColumn === b.endColumn
						)
							return "";
						const l = this.H(b.startLineNumber, b.startColumn),
							y = this.H(b.endLineNumber, b.endColumn),
							$ = this.getValueInRange2(l, y);
						return s
							? s !== this.d || !this.f
								? $.replace(/\r\n|\r|\n/g, s)
								: s === this.getEOL() && this.f
									? $
									: $.replace(/\r\n|\r|\n/g, s)
							: $;
					}
					getValueInRange2(b, s) {
						if (b.node === s.node) {
							const S = b.node,
								I = this.a[S.piece.bufferIndex].buffer,
								T = this.u(S.piece.bufferIndex, S.piece.start);
							return I.substring(T + b.remainder, T + s.remainder);
						}
						let l = b.node;
						const y = this.a[l.piece.bufferIndex].buffer,
							$ = this.u(l.piece.bufferIndex, l.piece.start);
						let v = y.substring($ + b.remainder, $ + l.piece.length);
						for (l = l.next(); l !== C.$OU; ) {
							const S = this.a[l.piece.bufferIndex].buffer,
								I = this.u(l.piece.bufferIndex, l.piece.start);
							if (l === s.node) {
								v += S.substring(I, I + s.remainder);
								break;
							} else v += S.substr(I, l.piece.length);
							l = l.next();
						}
						return v;
					}
					getLinesContent() {
						const b = [];
						let s = 0,
							l = "",
							y = !1;
						return (
							this.iterate(this.root, ($) => {
								if ($ === C.$OU) return !0;
								const v = $.piece;
								let S = v.length;
								if (S === 0) return !0;
								const I = this.a[v.bufferIndex].buffer,
									T = this.a[v.bufferIndex].lineStarts,
									P = v.start.line,
									k = v.end.line;
								let L = T[P] + v.start.column;
								if (
									y &&
									(I.charCodeAt(L) === t.CharCode.LineFeed && (L++, S--),
									(b[s++] = l),
									(l = ""),
									(y = !1),
									S === 0)
								)
									return !0;
								if (P === k)
									return (
										!this.f &&
										I.charCodeAt(L + S - 1) === t.CharCode.CarriageReturn
											? ((y = !0), (l += I.substr(L, S - 1)))
											: (l += I.substr(L, S)),
										!0
									);
								(l += this.f
									? I.substring(L, Math.max(L, T[P + 1] - this.e))
									: I.substring(L, T[P + 1]).replace(/(\r\n|\r|\n)$/, "")),
									(b[s++] = l);
								for (let D = P + 1; D < k; D++)
									(l = this.f
										? I.substring(T[D], T[D + 1] - this.e)
										: I.substring(T[D], T[D + 1]).replace(/(\r\n|\r|\n)$/, "")),
										(b[s++] = l);
								return (
									!this.f &&
									I.charCodeAt(T[k] + v.end.column - 1) ===
										t.CharCode.CarriageReturn
										? ((y = !0),
											v.end.column === 0
												? s--
												: (l = I.substr(T[k], v.end.column - 1)))
										: (l = I.substr(T[k], v.end.column)),
									!0
								);
							}),
							y && ((b[s++] = l), (l = "")),
							(b[s++] = l),
							b
						);
					}
					getLength() {
						return this.c;
					}
					getLineCount() {
						return this.b;
					}
					getLineContent(b) {
						return this.j.lineNumber === b
							? this.j.value
							: ((this.j.lineNumber = b),
								b === this.b
									? (this.j.value = this.getLineRawContent(b))
									: this.f
										? (this.j.value = this.getLineRawContent(b, this.e))
										: (this.j.value = this.getLineRawContent(b).replace(
												/(\r\n|\r|\n)$/,
												"",
											)),
								this.j.value);
					}
					l(b) {
						if (b.remainder === b.node.piece.length) {
							const s = b.node.next();
							if (!s) return 0;
							const l = this.a[s.piece.bufferIndex],
								y = this.u(s.piece.bufferIndex, s.piece.start);
							return l.buffer.charCodeAt(y);
						} else {
							const s = this.a[b.node.piece.bufferIndex],
								y =
									this.u(b.node.piece.bufferIndex, b.node.piece.start) +
									b.remainder;
							return s.buffer.charCodeAt(y);
						}
					}
					getLineCharCode(b, s) {
						const l = this.H(b, s + 1);
						return this.l(l);
					}
					getLineLength(b) {
						if (b === this.getLineCount()) {
							const s = this.getOffsetAt(b, 1);
							return this.getLength() - s;
						}
						return this.getOffsetAt(b + 1, 1) - this.getOffsetAt(b, 1) - this.e;
					}
					getCharCode(b) {
						const s = this.G(b);
						return this.l(s);
					}
					getNearestChunk(b) {
						const s = this.G(b);
						if (s.remainder === s.node.piece.length) {
							const l = s.node.next();
							if (!l || l === C.$OU) return "";
							const y = this.a[l.piece.bufferIndex],
								$ = this.u(l.piece.bufferIndex, l.piece.start);
							return y.buffer.substring($, $ + l.piece.length);
						} else {
							const l = this.a[s.node.piece.bufferIndex],
								y = this.u(s.node.piece.bufferIndex, s.node.piece.start),
								$ = y + s.remainder,
								v = y + s.node.piece.length;
							return l.buffer.substring($, v);
						}
					}
					findMatchesInNode(b, s, l, y, $, v, S, I, T, P, k) {
						const L = this.a[b.piece.bufferIndex],
							D = this.u(b.piece.bufferIndex, b.piece.start),
							M = this.u(b.piece.bufferIndex, $),
							N = this.u(b.piece.bufferIndex, v);
						let A;
						const R = { line: 0, column: 0 };
						let O, B;
						s._wordSeparators
							? ((O = L.buffer.substring(M, N)), (B = (U) => U + M), s.reset(0))
							: ((O = L.buffer), (B = (U) => U), s.reset(M));
						do
							if (((A = s.next(O)), A)) {
								if (B(A.index) >= N) return P;
								this.s(b, B(A.index) - D, R);
								const U = this.t(b.piece.bufferIndex, $, R),
									z =
										R.line === $.line ? R.column - $.column + y : R.column + 1,
									F = z + A[0].length;
								if (
									((k[P++] = (0, d.$ZU)(new w.$iL(l + U, z, l + U, F), A, I)),
									B(A.index) + A[0].length >= N || P >= T)
								)
									return P;
							}
						while (A);
						return P;
					}
					findMatchesLineByLine(b, s, l, y) {
						const $ = [];
						let v = 0;
						const S = new d.$3U(s.wordSeparators, s.regex);
						let I = this.H(b.startLineNumber, b.startColumn);
						if (I === null) return [];
						const T = this.H(b.endLineNumber, b.endColumn);
						if (T === null) return [];
						let P = this.s(I.node, I.remainder);
						const k = this.s(T.node, T.remainder);
						if (I.node === T.node)
							return (
								this.findMatchesInNode(
									I.node,
									S,
									b.startLineNumber,
									b.startColumn,
									P,
									k,
									s,
									l,
									y,
									v,
									$,
								),
								$
							);
						let L = b.startLineNumber,
							D = I.node;
						for (; D !== T.node; ) {
							const N = this.t(D.piece.bufferIndex, P, D.piece.end);
							if (N >= 1) {
								const R = this.a[D.piece.bufferIndex].lineStarts,
									O = this.u(D.piece.bufferIndex, D.piece.start),
									B = R[P.line + N],
									U = L === b.startLineNumber ? b.startColumn : 1;
								if (
									((v = this.findMatchesInNode(
										D,
										S,
										L,
										U,
										P,
										this.s(D, B - O),
										s,
										l,
										y,
										v,
										$,
									)),
									v >= y)
								)
									return $;
								L += N;
							}
							const A = L === b.startLineNumber ? b.startColumn - 1 : 0;
							if (L === b.endLineNumber) {
								const R = this.getLineContent(L).substring(A, b.endColumn - 1);
								return (v = this.n(s, S, R, b.endLineNumber, A, v, $, l, y)), $;
							}
							if (
								((v = this.n(
									s,
									S,
									this.getLineContent(L).substr(A),
									L,
									A,
									v,
									$,
									l,
									y,
								)),
								v >= y)
							)
								return $;
							L++,
								(I = this.H(L, 1)),
								(D = I.node),
								(P = this.s(I.node, I.remainder));
						}
						if (L === b.endLineNumber) {
							const N = L === b.startLineNumber ? b.startColumn - 1 : 0,
								A = this.getLineContent(L).substring(N, b.endColumn - 1);
							return (v = this.n(s, S, A, b.endLineNumber, N, v, $, l, y)), $;
						}
						const M = L === b.startLineNumber ? b.startColumn : 1;
						return (
							(v = this.findMatchesInNode(
								T.node,
								S,
								L,
								M,
								P,
								k,
								s,
								l,
								y,
								v,
								$,
							)),
							$
						);
					}
					n(b, s, l, y, $, v, S, I, T) {
						const P = b.wordSeparators;
						if (!I && b.simpleSearch) {
							const L = b.simpleSearch,
								D = L.length,
								M = l.length;
							let N = -D;
							for (; (N = l.indexOf(L, N + D)) !== -1; )
								if (
									(!P || (0, d.$2U)(P, l, M, N, D)) &&
									((S[v++] = new E.$MN(
										new w.$iL(y, N + 1 + $, y, N + 1 + D + $),
										null,
									)),
									v >= T)
								)
									return v;
							return v;
						}
						let k;
						s.reset(0);
						do
							if (
								((k = s.next(l)),
								k &&
									((S[v++] = (0, d.$ZU)(
										new w.$iL(
											y,
											k.index + 1 + $,
											y,
											k.index + 1 + k[0].length + $,
										),
										k,
										I,
									)),
									v >= T))
							)
								return v;
						while (k);
						return v;
					}
					insert(b, s, l = !1) {
						if (
							((this.f = this.f && l),
							(this.j.lineNumber = 0),
							(this.j.value = ""),
							this.root !== C.$OU)
						) {
							const { node: y, remainder: $, nodeStartOffset: v } = this.G(b),
								S = y.piece,
								I = S.bufferIndex,
								T = this.s(y, $);
							if (
								y.piece.bufferIndex === 0 &&
								S.end.line === this.g.line &&
								S.end.column === this.g.column &&
								v + S.length === b &&
								s.length < m
							) {
								this.F(y, s), this.y();
								return;
							}
							if (v === b) this.o(s, y), this.h.validate(b);
							else if (v + y.piece.length > b) {
								const P = [];
								let k = new c(
									S.bufferIndex,
									T,
									S.end,
									this.t(S.bufferIndex, T, S.end),
									this.u(I, S.end) - this.u(I, T),
								);
								if (this.K() && this.M(s) && this.I(y, $) === 10) {
									const N = { line: k.start.line + 1, column: 0 };
									(k = new c(
										k.bufferIndex,
										N,
										k.end,
										this.t(k.bufferIndex, N, k.end),
										k.length - 1,
									)),
										(s += `
`);
								}
								if (this.K() && this.L(s))
									if (this.I(y, $ - 1) === 13) {
										const N = this.s(y, $ - 1);
										this.C(y, N),
											(s = "\r" + s),
											y.piece.length === 0 && P.push(y);
									} else this.C(y, T);
								else this.C(y, T);
								const L = this.w(s);
								k.length > 0 && this.S(y, k);
								let D = y;
								for (let M = 0; M < L.length; M++) D = this.S(D, L[M]);
								this.v(P);
							} else this.q(s, y);
						} else {
							const y = this.w(s);
							let $ = this.T(null, y[0]);
							for (let v = 1; v < y.length; v++) $ = this.S($, y[v]);
						}
						this.y();
					}
					delete(b, s) {
						if (
							((this.j.lineNumber = 0),
							(this.j.value = ""),
							s <= 0 || this.root === C.$OU)
						)
							return;
						const l = this.G(b),
							y = this.G(b + s),
							$ = l.node,
							v = y.node;
						if ($ === v) {
							const L = this.s($, l.remainder),
								D = this.s($, y.remainder);
							if (l.nodeStartOffset === b) {
								if (s === $.piece.length) {
									const M = $.next();
									(0, C.$TU)(this, $), this.N(M), this.y();
									return;
								}
								this.D($, D), this.h.validate(b), this.N($), this.y();
								return;
							}
							if (l.nodeStartOffset + $.piece.length === b + s) {
								this.C($, L), this.O($), this.y();
								return;
							}
							this.E($, L, D), this.y();
							return;
						}
						const S = [],
							I = this.s($, l.remainder);
						this.C($, I), this.h.validate(b), $.piece.length === 0 && S.push($);
						const T = this.s(v, y.remainder);
						this.D(v, T), v.piece.length === 0 && S.push(v);
						const P = $.next();
						for (let L = P; L !== C.$OU && L !== v; L = L.next()) S.push(L);
						const k = $.piece.length === 0 ? $.prev() : $;
						this.v(S), this.O(k), this.y();
					}
					o(b, s) {
						const l = [];
						if (this.K() && this.M(b) && this.L(s)) {
							const v = s.piece,
								S = { line: v.start.line + 1, column: 0 },
								I = new c(
									v.bufferIndex,
									S,
									v.end,
									this.t(v.bufferIndex, S, v.end),
									v.length - 1,
								);
							(s.piece = I),
								(b += `
`),
								(0, C.$VU)(this, s, -1, -1),
								s.piece.length === 0 && l.push(s);
						}
						const y = this.w(b);
						let $ = this.T(s, y[y.length - 1]);
						for (let v = y.length - 2; v >= 0; v--) $ = this.T($, y[v]);
						this.N($), this.v(l);
					}
					q(b, s) {
						this.Q(b, s) &&
							(b += `
`);
						const l = this.w(b),
							y = this.S(s, l[0]);
						let $ = y;
						for (let v = 1; v < l.length; v++) $ = this.S($, l[v]);
						this.N(y);
					}
					s(b, s, l) {
						const y = b.piece,
							$ = b.piece.bufferIndex,
							v = this.a[$].lineStarts,
							I = v[y.start.line] + y.start.column + s;
						let T = y.start.line,
							P = y.end.line,
							k = 0,
							L = 0,
							D = 0;
						for (
							;
							T <= P && ((k = (T + (P - T) / 2) | 0), (D = v[k]), k !== P);
						)
							if (((L = v[k + 1]), I < D)) P = k - 1;
							else if (I >= L) T = k + 1;
							else break;
						return l
							? ((l.line = k), (l.column = I - D), null)
							: { line: k, column: I - D };
					}
					t(b, s, l) {
						if (l.column === 0) return l.line - s.line;
						const y = this.a[b].lineStarts;
						if (l.line === y.length - 1) return l.line - s.line;
						const $ = y[l.line + 1],
							v = y[l.line] + l.column;
						if ($ > v + 1) return l.line - s.line;
						const S = v - 1;
						return this.a[b].buffer.charCodeAt(S) === 13
							? l.line - s.line + 1
							: l.line - s.line;
					}
					u(b, s) {
						return this.a[b].lineStarts[s.line] + s.column;
					}
					v(b) {
						for (let s = 0; s < b.length; s++) (0, C.$TU)(this, b[s]);
					}
					w(b) {
						if (b.length > m) {
							const P = [];
							for (; b.length > m; ) {
								const L = b.charCodeAt(m - 1);
								let D;
								L === t.CharCode.CarriageReturn || (L >= 55296 && L <= 56319)
									? ((D = b.substring(0, m - 1)), (b = b.substring(m - 1)))
									: ((D = b.substring(0, m)), (b = b.substring(m)));
								const M = a(D);
								P.push(
									new c(
										this.a.length,
										{ line: 0, column: 0 },
										{ line: M.length - 1, column: D.length - M[M.length - 1] },
										M.length - 1,
										D.length,
									),
								),
									this.a.push(new n(D, M));
							}
							const k = a(b);
							return (
								P.push(
									new c(
										this.a.length,
										{ line: 0, column: 0 },
										{ line: k.length - 1, column: b.length - k[k.length - 1] },
										k.length - 1,
										b.length,
									),
								),
								this.a.push(new n(b, k)),
								P
							);
						}
						let s = this.a[0].buffer.length;
						const l = a(b, !1);
						let y = this.g;
						if (
							this.a[0].lineStarts[this.a[0].lineStarts.length - 1] === s &&
							s !== 0 &&
							this.L(b) &&
							this.M(this.a[0].buffer)
						) {
							(this.g = { line: this.g.line, column: this.g.column + 1 }),
								(y = this.g);
							for (let P = 0; P < l.length; P++) l[P] += s + 1;
							(this.a[0].lineStarts = this.a[0].lineStarts.concat(l.slice(1))),
								(this.a[0].buffer += "_" + b),
								(s += 1);
						} else {
							if (s !== 0) for (let P = 0; P < l.length; P++) l[P] += s;
							(this.a[0].lineStarts = this.a[0].lineStarts.concat(l.slice(1))),
								(this.a[0].buffer += b);
						}
						const $ = this.a[0].buffer.length,
							v = this.a[0].lineStarts.length - 1,
							S = $ - this.a[0].lineStarts[v],
							I = { line: v, column: S },
							T = new c(0, y, I, this.t(0, y, I), $ - s);
						return (this.g = I), [T];
					}
					getLinesRawContent() {
						return this.U(this.root);
					}
					getLineRawContent(b, s = 0) {
						let l = this.root,
							y = "";
						const $ = this.h.get2(b);
						if ($) {
							l = $.node;
							const v = this.B(l, b - $.nodeStartLineNumber - 1),
								S = this.a[l.piece.bufferIndex].buffer,
								I = this.u(l.piece.bufferIndex, l.piece.start);
							if ($.nodeStartLineNumber + l.piece.lineFeedCnt === b)
								y = S.substring(I + v, I + l.piece.length);
							else {
								const T = this.B(l, b - $.nodeStartLineNumber);
								return S.substring(I + v, I + T - s);
							}
						} else {
							let v = 0;
							const S = b;
							for (; l !== C.$OU; )
								if (l.left !== C.$OU && l.lf_left >= b - 1) l = l.left;
								else if (l.lf_left + l.piece.lineFeedCnt > b - 1) {
									const I = this.B(l, b - l.lf_left - 2),
										T = this.B(l, b - l.lf_left - 1),
										P = this.a[l.piece.bufferIndex].buffer,
										k = this.u(l.piece.bufferIndex, l.piece.start);
									return (
										(v += l.size_left),
										this.h.set({
											node: l,
											nodeStartOffset: v,
											nodeStartLineNumber: S - (b - 1 - l.lf_left),
										}),
										P.substring(k + I, k + T - s)
									);
								} else if (l.lf_left + l.piece.lineFeedCnt === b - 1) {
									const I = this.B(l, b - l.lf_left - 2),
										T = this.a[l.piece.bufferIndex].buffer,
										P = this.u(l.piece.bufferIndex, l.piece.start);
									y = T.substring(P + I, P + l.piece.length);
									break;
								} else
									(b -= l.lf_left + l.piece.lineFeedCnt),
										(v += l.size_left + l.piece.length),
										(l = l.right);
						}
						for (l = l.next(); l !== C.$OU; ) {
							const v = this.a[l.piece.bufferIndex].buffer;
							if (l.piece.lineFeedCnt > 0) {
								const S = this.B(l, 0),
									I = this.u(l.piece.bufferIndex, l.piece.start);
								return (y += v.substring(I, I + S - s)), y;
							} else {
								const S = this.u(l.piece.bufferIndex, l.piece.start);
								y += v.substr(S, l.piece.length);
							}
							l = l.next();
						}
						return y;
					}
					y() {
						let b = this.root,
							s = 1,
							l = 0;
						for (; b !== C.$OU; )
							(s += b.lf_left + b.piece.lineFeedCnt),
								(l += b.size_left + b.piece.length),
								(b = b.right);
						(this.b = s), (this.c = l), this.h.validate(this.c);
					}
					A(b, s) {
						const l = b.piece,
							y = this.s(b, s),
							$ = y.line - l.start.line;
						if (
							this.u(l.bufferIndex, l.end) - this.u(l.bufferIndex, l.start) ===
							s
						) {
							const v = this.t(b.piece.bufferIndex, l.start, y);
							if (v !== $) return { index: v, remainder: 0 };
						}
						return { index: $, remainder: y.column };
					}
					B(b, s) {
						if (s < 0) return 0;
						const l = b.piece,
							y = this.a[l.bufferIndex].lineStarts,
							$ = l.start.line + s + 1;
						return $ > l.end.line
							? y[l.end.line] + l.end.column - y[l.start.line] - l.start.column
							: y[$] - y[l.start.line] - l.start.column;
					}
					C(b, s) {
						const l = b.piece,
							y = l.lineFeedCnt,
							$ = this.u(l.bufferIndex, l.end),
							v = s,
							S = this.u(l.bufferIndex, v),
							I = this.t(l.bufferIndex, l.start, v),
							T = I - y,
							P = S - $,
							k = l.length + P;
						(b.piece = new c(l.bufferIndex, l.start, v, I, k)),
							(0, C.$VU)(this, b, P, T);
					}
					D(b, s) {
						const l = b.piece,
							y = l.lineFeedCnt,
							$ = this.u(l.bufferIndex, l.start),
							v = s,
							S = this.t(l.bufferIndex, v, l.end),
							I = this.u(l.bufferIndex, v),
							T = S - y,
							P = $ - I,
							k = l.length + P;
						(b.piece = new c(l.bufferIndex, v, l.end, S, k)),
							(0, C.$VU)(this, b, P, T);
					}
					E(b, s, l) {
						const y = b.piece,
							$ = y.start,
							v = y.end,
							S = y.length,
							I = y.lineFeedCnt,
							T = s,
							P = this.t(y.bufferIndex, y.start, T),
							k = this.u(y.bufferIndex, s) - this.u(y.bufferIndex, $);
						(b.piece = new c(y.bufferIndex, y.start, T, P, k)),
							(0, C.$VU)(this, b, k - S, P - I);
						const L = new c(
								y.bufferIndex,
								l,
								v,
								this.t(y.bufferIndex, l, v),
								this.u(y.bufferIndex, v) - this.u(y.bufferIndex, l),
							),
							D = this.S(b, L);
						this.N(D);
					}
					F(b, s) {
						this.Q(s, b) &&
							(s += `
`);
						const l = this.K() && this.L(s) && this.M(b),
							y = this.a[0].buffer.length;
						this.a[0].buffer += s;
						const $ = a(s, !1);
						for (let D = 0; D < $.length; D++) $[D] += y;
						if (l) {
							const D = this.a[0].lineStarts[this.a[0].lineStarts.length - 2];
							this.a[0].lineStarts.pop(),
								(this.g = { line: this.g.line - 1, column: y - D });
						}
						this.a[0].lineStarts = this.a[0].lineStarts.concat($.slice(1));
						const v = this.a[0].lineStarts.length - 1,
							S = this.a[0].buffer.length - this.a[0].lineStarts[v],
							I = { line: v, column: S },
							T = b.piece.length + s.length,
							P = b.piece.lineFeedCnt,
							k = this.t(0, b.piece.start, I),
							L = k - P;
						(b.piece = new c(b.piece.bufferIndex, b.piece.start, I, k, T)),
							(this.g = I),
							(0, C.$VU)(this, b, s.length, L);
					}
					G(b) {
						let s = this.root;
						const l = this.h.get(b);
						if (l)
							return {
								node: l.node,
								nodeStartOffset: l.nodeStartOffset,
								remainder: b - l.nodeStartOffset,
							};
						let y = 0;
						for (; s !== C.$OU; )
							if (s.size_left > b) s = s.left;
							else if (s.size_left + s.piece.length >= b) {
								y += s.size_left;
								const $ = {
									node: s,
									remainder: b - s.size_left,
									nodeStartOffset: y,
								};
								return this.h.set($), $;
							} else
								(b -= s.size_left + s.piece.length),
									(y += s.size_left + s.piece.length),
									(s = s.right);
						return null;
					}
					H(b, s) {
						let l = this.root,
							y = 0;
						for (; l !== C.$OU; )
							if (l.left !== C.$OU && l.lf_left >= b - 1) l = l.left;
							else if (l.lf_left + l.piece.lineFeedCnt > b - 1) {
								const $ = this.B(l, b - l.lf_left - 2),
									v = this.B(l, b - l.lf_left - 1);
								return (
									(y += l.size_left),
									{
										node: l,
										remainder: Math.min($ + s - 1, v),
										nodeStartOffset: y,
									}
								);
							} else if (l.lf_left + l.piece.lineFeedCnt === b - 1) {
								const $ = this.B(l, b - l.lf_left - 2);
								if ($ + s - 1 <= l.piece.length)
									return { node: l, remainder: $ + s - 1, nodeStartOffset: y };
								s -= l.piece.length - $;
								break;
							} else
								(b -= l.lf_left + l.piece.lineFeedCnt),
									(y += l.size_left + l.piece.length),
									(l = l.right);
						for (l = l.next(); l !== C.$OU; ) {
							if (l.piece.lineFeedCnt > 0) {
								const $ = this.B(l, 0),
									v = this.J(l);
								return {
									node: l,
									remainder: Math.min(s - 1, $),
									nodeStartOffset: v,
								};
							} else if (l.piece.length >= s - 1) {
								const $ = this.J(l);
								return { node: l, remainder: s - 1, nodeStartOffset: $ };
							} else s -= l.piece.length;
							l = l.next();
						}
						return null;
					}
					I(b, s) {
						if (b.piece.lineFeedCnt < 1) return -1;
						const l = this.a[b.piece.bufferIndex],
							y = this.u(b.piece.bufferIndex, b.piece.start) + s;
						return l.buffer.charCodeAt(y);
					}
					J(b) {
						if (!b) return 0;
						let s = b.size_left;
						for (; b !== this.root; )
							b.parent.right === b &&
								(s += b.parent.size_left + b.parent.piece.length),
								(b = b.parent);
						return s;
					}
					K() {
						return !(
							this.f &&
							this.d ===
								`
`
						);
					}
					L(b) {
						if (typeof b == "string") return b.charCodeAt(0) === 10;
						if (b === C.$OU || b.piece.lineFeedCnt === 0) return !1;
						const s = b.piece,
							l = this.a[s.bufferIndex].lineStarts,
							y = s.start.line,
							$ = l[y] + s.start.column;
						return y === l.length - 1 || l[y + 1] > $ + 1
							? !1
							: this.a[s.bufferIndex].buffer.charCodeAt($) === 10;
					}
					M(b) {
						return typeof b == "string"
							? b.charCodeAt(b.length - 1) === 13
							: b === C.$OU || b.piece.lineFeedCnt === 0
								? !1
								: this.I(b, b.piece.length - 1) === 13;
					}
					N(b) {
						if (this.K() && this.L(b)) {
							const s = b.prev();
							this.M(s) && this.P(s, b);
						}
					}
					O(b) {
						if (this.K() && this.M(b)) {
							const s = b.next();
							this.L(s) && this.P(b, s);
						}
					}
					P(b, s) {
						const l = [],
							y = this.a[b.piece.bufferIndex].lineStarts;
						let $;
						b.piece.end.column === 0
							? ($ = {
									line: b.piece.end.line - 1,
									column: y[b.piece.end.line] - y[b.piece.end.line - 1] - 1,
								})
							: ($ = {
									line: b.piece.end.line,
									column: b.piece.end.column - 1,
								});
						const v = b.piece.length - 1,
							S = b.piece.lineFeedCnt - 1;
						(b.piece = new c(b.piece.bufferIndex, b.piece.start, $, S, v)),
							(0, C.$VU)(this, b, -1, -1),
							b.piece.length === 0 && l.push(b);
						const I = { line: s.piece.start.line + 1, column: 0 },
							T = s.piece.length - 1,
							P = this.t(s.piece.bufferIndex, I, s.piece.end);
						(s.piece = new c(s.piece.bufferIndex, I, s.piece.end, P, T)),
							(0, C.$VU)(this, s, -1, -1),
							s.piece.length === 0 && l.push(s);
						const k = this.w(`\r
`);
						this.S(b, k[0]);
						for (let L = 0; L < l.length; L++) (0, C.$TU)(this, l[L]);
					}
					Q(b, s) {
						if (this.K() && this.M(b)) {
							const l = s.next();
							if (this.L(l)) {
								if (
									((b += `
`),
									l.piece.length === 1)
								)
									(0, C.$TU)(this, l);
								else {
									const y = l.piece,
										$ = { line: y.start.line + 1, column: 0 },
										v = y.length - 1,
										S = this.t(y.bufferIndex, $, y.end);
									(l.piece = new c(y.bufferIndex, $, y.end, S, v)),
										(0, C.$VU)(this, l, -1, -1);
								}
								return !0;
							}
						}
						return !1;
					}
					iterate(b, s) {
						if (b === C.$OU) return s(C.$OU);
						const l = this.iterate(b.left, s);
						return l && s(b) && this.iterate(b.right, s);
					}
					R(b) {
						if (b === C.$OU) return "";
						const s = this.a[b.piece.bufferIndex],
							l = b.piece,
							y = this.u(l.bufferIndex, l.start),
							$ = this.u(l.bufferIndex, l.end);
						return s.buffer.substring(y, $);
					}
					getPieceContent(b) {
						const s = this.a[b.bufferIndex],
							l = this.u(b.bufferIndex, b.start),
							y = this.u(b.bufferIndex, b.end);
						return s.buffer.substring(l, y);
					}
					S(b, s) {
						const l = new C.$NU(s, C.NodeColor.Red);
						if (
							((l.left = C.$OU),
							(l.right = C.$OU),
							(l.parent = C.$OU),
							(l.size_left = 0),
							(l.lf_left = 0),
							this.root === C.$OU)
						)
							(this.root = l), (l.color = C.NodeColor.Black);
						else if (b.right === C.$OU) (b.right = l), (l.parent = b);
						else {
							const $ = (0, C.$PU)(b.right);
							($.left = l), (l.parent = $);
						}
						return (0, C.$UU)(this, l), l;
					}
					T(b, s) {
						const l = new C.$NU(s, C.NodeColor.Red);
						if (
							((l.left = C.$OU),
							(l.right = C.$OU),
							(l.parent = C.$OU),
							(l.size_left = 0),
							(l.lf_left = 0),
							this.root === C.$OU)
						)
							(this.root = l), (l.color = C.NodeColor.Black);
						else if (b.left === C.$OU) (b.left = l), (l.parent = b);
						else {
							const y = (0, C.$QU)(b.left);
							(y.right = l), (l.parent = y);
						}
						return (0, C.$UU)(this, l), l;
					}
					U(b) {
						let s = "";
						return this.iterate(b, (l) => ((s += this.R(l)), !0)), s;
					}
				}
				e.$8U = o;
			},
		),
		define(
			de[1194],
			he([1, 0, 6, 37, 17, 64, 1628, 531, 1589, 3]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$9U = void 0),
					(i = mt(i));
				class u extends r.$1c {
					constructor(h, c, n, g, p, o, f) {
						super(),
							(this.m = this.D(new t.$re())),
							(this.onDidChangeContent = this.m.event),
							(this.f = c),
							(this.j = !o),
							(this.g = g),
							(this.h = p),
							(this.c = new C.$8U(h, n, f));
					}
					equals(h) {
						return !(h instanceof u) ||
							this.f !== h.f ||
							this.getEOL() !== h.getEOL()
							? !1
							: this.c.equal(h.c);
					}
					mightContainRTL() {
						return this.g;
					}
					mightContainUnusualLineTerminators() {
						return this.h;
					}
					resetMightContainUnusualLineTerminators() {
						this.h = !1;
					}
					mightContainNonBasicASCII() {
						return this.j;
					}
					getBOM() {
						return this.f;
					}
					getEOL() {
						return this.c.getEOL();
					}
					createSnapshot(h) {
						return this.c.createSnapshot(h ? this.f : "");
					}
					getOffsetAt(h, c) {
						return this.c.getOffsetAt(h, c);
					}
					getPositionAt(h) {
						return this.c.getPositionAt(h);
					}
					getRangeAt(h, c) {
						const n = h + c,
							g = this.getPositionAt(h),
							p = this.getPositionAt(n);
						return new w.$iL(g.lineNumber, g.column, p.lineNumber, p.column);
					}
					getValueInRange(h, c = E.EndOfLinePreference.TextDefined) {
						if (h.isEmpty()) return "";
						const n = this.n(c);
						return this.c.getValueInRange(h, n);
					}
					getValueLengthInRange(h, c = E.EndOfLinePreference.TextDefined) {
						if (h.isEmpty()) return 0;
						if (h.startLineNumber === h.endLineNumber)
							return h.endColumn - h.startColumn;
						const n = this.getOffsetAt(h.startLineNumber, h.startColumn),
							g = this.getOffsetAt(h.endLineNumber, h.endColumn);
						let p = 0;
						const o = this.n(c),
							f = this.getEOL();
						if (o.length !== f.length) {
							const b = o.length - f.length,
								s = h.endLineNumber - h.startLineNumber;
							p = b * s;
						}
						return g - n + p;
					}
					getCharacterCountInRange(h, c = E.EndOfLinePreference.TextDefined) {
						if (this.j) {
							let n = 0;
							const g = h.startLineNumber,
								p = h.endLineNumber;
							for (let o = g; o <= p; o++) {
								const f = this.getLineContent(o),
									b = o === g ? h.startColumn - 1 : 0,
									s = o === p ? h.endColumn - 1 : f.length;
								for (let l = b; l < s; l++)
									i.$Qf(f.charCodeAt(l))
										? ((n = n + 1), (l = l + 1))
										: (n = n + 1);
							}
							return (n += this.n(c).length * (p - g)), n;
						}
						return this.getValueLengthInRange(h, c);
					}
					getNearestChunk(h) {
						return this.c.getNearestChunk(h);
					}
					getLength() {
						return this.c.getLength();
					}
					getLineCount() {
						return this.c.getLineCount();
					}
					getLinesContent() {
						return this.c.getLinesContent();
					}
					getLineContent(h) {
						return this.c.getLineContent(h);
					}
					getLineCharCode(h, c) {
						return this.c.getLineCharCode(h, c);
					}
					getCharCode(h) {
						return this.c.getCharCode(h);
					}
					getLineLength(h) {
						return this.c.getLineLength(h);
					}
					getLineMinColumn(h) {
						return 1;
					}
					getLineMaxColumn(h) {
						return this.getLineLength(h) + 1;
					}
					getLineFirstNonWhitespaceColumn(h) {
						const c = i.$Bf(this.getLineContent(h));
						return c === -1 ? 0 : c + 1;
					}
					getLineLastNonWhitespaceColumn(h) {
						const c = i.$Df(this.getLineContent(h));
						return c === -1 ? 0 : c + 2;
					}
					n(h) {
						switch (h) {
							case E.EndOfLinePreference.LF:
								return `
`;
							case E.EndOfLinePreference.CRLF:
								return `\r
`;
							case E.EndOfLinePreference.TextDefined:
								return this.getEOL();
							default:
								throw new Error("Unknown EOL preference");
						}
					}
					setEOL(h) {
						this.c.setEOL(h);
					}
					applyEdits(h, c, n) {
						let g = this.g,
							p = this.h,
							o = this.j,
							f = !0,
							b = [];
						for (let I = 0; I < h.length; I++) {
							const T = h[I];
							f && T._isTracked && (f = !1);
							const P = T.range;
							if (T.text) {
								let N = !0;
								o || ((N = !i.$2f(T.text)), (o = N)),
									!g && N && (g = i.$1f(T.text)),
									!p && N && (p = i.$4f(T.text));
							}
							let k = "",
								L = 0,
								D = 0,
								M = 0;
							if (T.text) {
								let N;
								[L, D, M, N] = (0, d.$6L)(T.text);
								const A = this.getEOL(),
									R =
										A ===
										`\r
`
											? d.StringEOL.CRLF
											: d.StringEOL.LF;
								N === d.StringEOL.Unknown || N === R
									? (k = T.text)
									: (k = T.text.replace(/\r\n|\r|\n/g, A));
							}
							b[I] = {
								sortIndex: I,
								identifier: T.identifier || null,
								range: P,
								rangeOffset: this.getOffsetAt(P.startLineNumber, P.startColumn),
								rangeLength: this.getValueLengthInRange(P),
								text: k,
								eolCount: L,
								firstLineLength: D,
								lastLineLength: M,
								forceMoveMarkers: !!T.forceMoveMarkers,
								isAutoWhitespaceEdit: T.isAutoWhitespaceEdit || !1,
							};
						}
						b.sort(u.t);
						let s = !1;
						for (let I = 0, T = b.length - 1; I < T; I++) {
							const P = b[I].range.getEndPosition(),
								k = b[I + 1].range.getStartPosition();
							if (k.isBeforeOrEqual(P)) {
								if (k.isBefore(P))
									throw new Error("Overlapping ranges are not allowed!");
								s = !0;
							}
						}
						f && (b = this.q(b));
						const l = n || c ? u._getInverseEditRanges(b) : [],
							y = [];
						if (c)
							for (let I = 0; I < b.length; I++) {
								const T = b[I],
									P = l[I];
								if (T.isAutoWhitespaceEdit && T.range.isEmpty())
									for (let k = P.startLineNumber; k <= P.endLineNumber; k++) {
										let L = "";
										(k === P.startLineNumber &&
											((L = this.getLineContent(T.range.startLineNumber)),
											i.$Bf(L) !== -1)) ||
											y.push({ lineNumber: k, oldContent: L });
									}
							}
						let $ = null;
						if (n) {
							let I = 0;
							$ = [];
							for (let T = 0; T < b.length; T++) {
								const P = b[T],
									k = l[T],
									L = this.getValueInRange(P.range),
									D = P.rangeOffset + I;
								(I += P.text.length - L.length),
									($[T] = {
										sortIndex: P.sortIndex,
										identifier: P.identifier,
										range: k,
										text: L,
										textChange: new m.$LL(P.rangeOffset, L, D, P.text),
									});
							}
							s || $.sort((T, P) => T.sortIndex - P.sortIndex);
						}
						(this.g = g), (this.h = p), (this.j = o);
						const v = this.s(b);
						let S = null;
						if (c && y.length > 0) {
							y.sort((I, T) => T.lineNumber - I.lineNumber), (S = []);
							for (let I = 0, T = y.length; I < T; I++) {
								const P = y[I].lineNumber;
								if (I > 0 && y[I - 1].lineNumber === P) continue;
								const k = y[I].oldContent,
									L = this.getLineContent(P);
								L.length === 0 || L === k || i.$Bf(L) !== -1 || S.push(P);
							}
						}
						return this.m.fire(), new E.$SN($, v, S);
					}
					q(h) {
						return h.length < 1e3 ? h : [this._toSingleEditOperation(h)];
					}
					_toSingleEditOperation(h) {
						let c = !1;
						const n = h[0].range,
							g = h[h.length - 1].range,
							p = new w.$iL(
								n.startLineNumber,
								n.startColumn,
								g.endLineNumber,
								g.endColumn,
							);
						let o = n.startLineNumber,
							f = n.startColumn;
						const b = [];
						for (let v = 0, S = h.length; v < S; v++) {
							const I = h[v],
								T = I.range;
							(c = c || I.forceMoveMarkers),
								b.push(
									this.getValueInRange(
										new w.$iL(o, f, T.startLineNumber, T.startColumn),
									),
								),
								I.text.length > 0 && b.push(I.text),
								(o = T.endLineNumber),
								(f = T.endColumn);
						}
						const s = b.join(""),
							[l, y, $] = (0, d.$6L)(s);
						return {
							sortIndex: 0,
							identifier: h[0].identifier,
							range: p,
							rangeOffset: this.getOffsetAt(p.startLineNumber, p.startColumn),
							rangeLength: this.getValueLengthInRange(
								p,
								E.EndOfLinePreference.TextDefined,
							),
							text: s,
							eolCount: l,
							firstLineLength: y,
							lastLineLength: $,
							forceMoveMarkers: c,
							isAutoWhitespaceEdit: !1,
						};
					}
					s(h) {
						h.sort(u.u);
						const c = [];
						for (let n = 0; n < h.length; n++) {
							const g = h[n],
								p = g.range.startLineNumber,
								o = g.range.startColumn,
								f = g.range.endLineNumber,
								b = g.range.endColumn;
							if (p === f && o === b && g.text.length === 0) continue;
							g.text
								? (this.c.delete(g.rangeOffset, g.rangeLength),
									this.c.insert(g.rangeOffset, g.text, !0))
								: this.c.delete(g.rangeOffset, g.rangeLength);
							const s = new w.$iL(p, o, f, b);
							c.push({
								range: s,
								rangeLength: g.rangeLength,
								text: g.text,
								rangeOffset: g.rangeOffset,
								forceMoveMarkers: g.forceMoveMarkers,
							});
						}
						return c;
					}
					findMatchesLineByLine(h, c, n, g) {
						return this.c.findMatchesLineByLine(h, c, n, g);
					}
					getPieceTree() {
						return this.c;
					}
					static _getInverseEditRange(h, c) {
						const n = h.startLineNumber,
							g = h.startColumn,
							[p, o, f] = (0, d.$6L)(c);
						let b;
						if (c.length > 0) {
							const s = p + 1;
							s === 1
								? (b = new w.$iL(n, g, n, g + o))
								: (b = new w.$iL(n, g, n + s - 1, f + 1));
						} else b = new w.$iL(n, g, n, g);
						return b;
					}
					static _getInverseEditRanges(h) {
						const c = [];
						let n = 0,
							g = 0,
							p = null;
						for (let o = 0, f = h.length; o < f; o++) {
							const b = h[o];
							let s, l;
							p
								? p.range.endLineNumber === b.range.startLineNumber
									? ((s = n),
										(l = g + (b.range.startColumn - p.range.endColumn)))
									: ((s =
											n + (b.range.startLineNumber - p.range.endLineNumber)),
										(l = b.range.startColumn))
								: ((s = b.range.startLineNumber), (l = b.range.startColumn));
							let y;
							if (b.text.length > 0) {
								const $ = b.eolCount + 1;
								$ === 1
									? (y = new w.$iL(s, l, s, l + b.firstLineLength))
									: (y = new w.$iL(s, l, s + $ - 1, b.lastLineLength + 1));
							} else y = new w.$iL(s, l, s, l);
							(n = y.endLineNumber), (g = y.endColumn), c.push(y), (p = b);
						}
						return c;
					}
					static t(h, c) {
						const n = w.$iL.compareRangesUsingEnds(h.range, c.range);
						return n === 0 ? h.sortIndex - c.sortIndex : n;
					}
					static u(h, c) {
						const n = w.$iL.compareRangesUsingEnds(h.range, c.range);
						return n === 0 ? c.sortIndex - h.sortIndex : -n;
					}
				}
				e.$9U = u;
			},
		),
		define(
			de[1195],
			he([1, 0, 120, 37, 64, 1628, 1194]),
			function (ce, e, t, i, w, E, C) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$0U = void 0),
					(i = mt(i));
				class d {
					constructor(u, a, h, c, n, g, p, o, f) {
						(this.a = u),
							(this.b = a),
							(this.c = h),
							(this.d = c),
							(this.e = n),
							(this.f = g),
							(this.g = p),
							(this.h = o),
							(this.j = f);
					}
					k(u) {
						const a = this.c + this.d + this.e,
							h = this.c + this.e;
						return a === 0
							? u === w.DefaultEndOfLine.LF
								? `
`
								: `\r
`
							: h > a / 2
								? `\r
`
								: `
`;
					}
					create(u) {
						const a = this.k(u),
							h = this.a;
						if (
							this.j &&
							((a ===
								`\r
` &&
								(this.c > 0 || this.d > 0)) ||
								(a ===
									`
` &&
									(this.c > 0 || this.e > 0)))
						)
							for (let n = 0, g = h.length; n < g; n++) {
								const p = h[n].buffer.replace(/\r\n|\r|\n/g, a),
									o = (0, E.$4U)(p);
								h[n] = new E.$7U(p, o);
							}
						const c = new C.$9U(h, this.b, a, this.f, this.g, this.h, this.j);
						return { textBuffer: c, disposable: c };
					}
					getFirstLineText(u) {
						return this.a[0].buffer.substr(0, u).split(/\r\n|\r|\n/)[0];
					}
				}
				class m {
					constructor() {
						(this.a = []),
							(this.b = ""),
							(this.c = !1),
							(this.d = 0),
							(this.e = []),
							(this.f = 0),
							(this.g = 0),
							(this.h = 0),
							(this.j = !1),
							(this.k = !1),
							(this.l = !0);
					}
					acceptChunk(u) {
						if (u.length === 0) return;
						this.a.length === 0 &&
							i.$_f(u) &&
							((this.b = i.$$f), (u = u.substr(1)));
						const a = u.charCodeAt(u.length - 1);
						a === t.CharCode.CarriageReturn || (a >= 55296 && a <= 56319)
							? (this.m(u.substr(0, u.length - 1), !1),
								(this.c = !0),
								(this.d = a))
							: (this.m(u, !1), (this.c = !1), (this.d = a));
					}
					m(u, a) {
						(!a && u.length === 0) ||
							(this.c ? this.n(String.fromCharCode(this.d) + u) : this.n(u));
					}
					n(u) {
						const a = (0, E.$5U)(this.e, u);
						this.a.push(new E.$7U(u, a.lineStarts)),
							(this.f += a.cr),
							(this.g += a.lf),
							(this.h += a.crlf),
							a.isBasicASCII ||
								((this.l = !1),
								this.j || (this.j = i.$1f(u)),
								this.k || (this.k = i.$4f(u)));
					}
					finish(u = !0) {
						return (
							this.o(),
							new d(
								this.a,
								this.b,
								this.f,
								this.g,
								this.h,
								this.j,
								this.k,
								this.l,
								u,
							)
						);
					}
					o() {
						if ((this.a.length === 0 && this.m("", !0), this.c)) {
							this.c = !1;
							const u = this.a[this.a.length - 1];
							u.buffer += String.fromCharCode(this.d);
							const a = (0, E.$4U)(u.buffer);
							(u.lineStarts = a),
								this.d === t.CharCode.CarriageReturn && this.f++;
						}
					}
				}
				e.$0U = m;
			},
		),
		