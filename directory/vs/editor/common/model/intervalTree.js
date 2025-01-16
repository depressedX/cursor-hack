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
		