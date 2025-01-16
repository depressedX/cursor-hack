define(de[2567], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$OU = e.NodeColor = e.$NU = void 0),
				(e.$PU = w),
				(e.$QU = E),
				(e.$RU = r),
				(e.$SU = u),
				(e.$TU = a),
				(e.$UU = h),
				(e.$VU = c),
				(e.$WU = n);
			class t {
				constructor(p, o) {
					(this.piece = p),
						(this.color = o),
						(this.size_left = 0),
						(this.lf_left = 0),
						(this.parent = this),
						(this.left = this),
						(this.right = this);
				}
				next() {
					if (this.right !== e.$OU) return w(this.right);
					let p = this;
					for (; p.parent !== e.$OU && p.parent.left !== p; ) p = p.parent;
					return p.parent === e.$OU ? e.$OU : p.parent;
				}
				prev() {
					if (this.left !== e.$OU) return E(this.left);
					let p = this;
					for (; p.parent !== e.$OU && p.parent.right !== p; ) p = p.parent;
					return p.parent === e.$OU ? e.$OU : p.parent;
				}
				detach() {
					(this.parent = null), (this.left = null), (this.right = null);
				}
			}
			e.$NU = t;
			var i;
			(function (g) {
				(g[(g.Black = 0)] = "Black"), (g[(g.Red = 1)] = "Red");
			})(i || (e.NodeColor = i = {})),
				(e.$OU = new t(null, i.Black)),
				(e.$OU.parent = e.$OU),
				(e.$OU.left = e.$OU),
				(e.$OU.right = e.$OU),
				(e.$OU.color = i.Black);
			function w(g) {
				for (; g.left !== e.$OU; ) g = g.left;
				return g;
			}
			function E(g) {
				for (; g.right !== e.$OU; ) g = g.right;
				return g;
			}
			function C(g) {
				return g === e.$OU ? 0 : g.size_left + g.piece.length + C(g.right);
			}
			function d(g) {
				return g === e.$OU ? 0 : g.lf_left + g.piece.lineFeedCnt + d(g.right);
			}
			function m() {
				e.$OU.parent = e.$OU;
			}
			function r(g, p) {
				const o = p.right;
				(o.size_left += p.size_left + (p.piece ? p.piece.length : 0)),
					(o.lf_left += p.lf_left + (p.piece ? p.piece.lineFeedCnt : 0)),
					(p.right = o.left),
					o.left !== e.$OU && (o.left.parent = p),
					(o.parent = p.parent),
					p.parent === e.$OU
						? (g.root = o)
						: p.parent.left === p
							? (p.parent.left = o)
							: (p.parent.right = o),
					(o.left = p),
					(p.parent = o);
			}
			function u(g, p) {
				const o = p.left;
				(p.left = o.right),
					o.right !== e.$OU && (o.right.parent = p),
					(o.parent = p.parent),
					(p.size_left -= o.size_left + (o.piece ? o.piece.length : 0)),
					(p.lf_left -= o.lf_left + (o.piece ? o.piece.lineFeedCnt : 0)),
					p.parent === e.$OU
						? (g.root = o)
						: p === p.parent.right
							? (p.parent.right = o)
							: (p.parent.left = o),
					(o.right = p),
					(p.parent = o);
			}
			function a(g, p) {
				let o, f;
				if (
					(p.left === e.$OU
						? ((f = p), (o = f.right))
						: p.right === e.$OU
							? ((f = p), (o = f.left))
							: ((f = w(p.right)), (o = f.right)),
					f === g.root)
				) {
					(g.root = o),
						(o.color = i.Black),
						p.detach(),
						m(),
						(g.root.parent = e.$OU);
					return;
				}
				const b = f.color === i.Red;
				if (
					(f === f.parent.left ? (f.parent.left = o) : (f.parent.right = o),
					f === p
						? ((o.parent = f.parent), n(g, o))
						: (f.parent === p ? (o.parent = f) : (o.parent = f.parent),
							n(g, o),
							(f.left = p.left),
							(f.right = p.right),
							(f.parent = p.parent),
							(f.color = p.color),
							p === g.root
								? (g.root = f)
								: p === p.parent.left
									? (p.parent.left = f)
									: (p.parent.right = f),
							f.left !== e.$OU && (f.left.parent = f),
							f.right !== e.$OU && (f.right.parent = f),
							(f.size_left = p.size_left),
							(f.lf_left = p.lf_left),
							n(g, f)),
					p.detach(),
					o.parent.left === o)
				) {
					const l = C(o),
						y = d(o);
					if (l !== o.parent.size_left || y !== o.parent.lf_left) {
						const $ = l - o.parent.size_left,
							v = y - o.parent.lf_left;
						(o.parent.size_left = l),
							(o.parent.lf_left = y),
							c(g, o.parent, $, v);
					}
				}
				if ((n(g, o.parent), b)) {
					m();
					return;
				}
				let s;
				for (; o !== g.root && o.color === i.Black; )
					o === o.parent.left
						? ((s = o.parent.right),
							s.color === i.Red &&
								((s.color = i.Black),
								(o.parent.color = i.Red),
								r(g, o.parent),
								(s = o.parent.right)),
							s.left.color === i.Black && s.right.color === i.Black
								? ((s.color = i.Red), (o = o.parent))
								: (s.right.color === i.Black &&
										((s.left.color = i.Black),
										(s.color = i.Red),
										u(g, s),
										(s = o.parent.right)),
									(s.color = o.parent.color),
									(o.parent.color = i.Black),
									(s.right.color = i.Black),
									r(g, o.parent),
									(o = g.root)))
						: ((s = o.parent.left),
							s.color === i.Red &&
								((s.color = i.Black),
								(o.parent.color = i.Red),
								u(g, o.parent),
								(s = o.parent.left)),
							s.left.color === i.Black && s.right.color === i.Black
								? ((s.color = i.Red), (o = o.parent))
								: (s.left.color === i.Black &&
										((s.right.color = i.Black),
										(s.color = i.Red),
										r(g, s),
										(s = o.parent.left)),
									(s.color = o.parent.color),
									(o.parent.color = i.Black),
									(s.left.color = i.Black),
									u(g, o.parent),
									(o = g.root)));
				(o.color = i.Black), m();
			}
			function h(g, p) {
				for (n(g, p); p !== g.root && p.parent.color === i.Red; )
					if (p.parent === p.parent.parent.left) {
						const o = p.parent.parent.right;
						o.color === i.Red
							? ((p.parent.color = i.Black),
								(o.color = i.Black),
								(p.parent.parent.color = i.Red),
								(p = p.parent.parent))
							: (p === p.parent.right && ((p = p.parent), r(g, p)),
								(p.parent.color = i.Black),
								(p.parent.parent.color = i.Red),
								u(g, p.parent.parent));
					} else {
						const o = p.parent.parent.left;
						o.color === i.Red
							? ((p.parent.color = i.Black),
								(o.color = i.Black),
								(p.parent.parent.color = i.Red),
								(p = p.parent.parent))
							: (p === p.parent.left && ((p = p.parent), u(g, p)),
								(p.parent.color = i.Black),
								(p.parent.parent.color = i.Red),
								r(g, p.parent.parent));
					}
				g.root.color = i.Black;
			}
			function c(g, p, o, f) {
				for (; p !== g.root && p !== e.$OU; )
					p.parent.left === p &&
						((p.parent.size_left += o), (p.parent.lf_left += f)),
						(p = p.parent);
			}
			function n(g, p) {
				let o = 0,
					f = 0;
				if (p !== g.root) {
					for (; p !== g.root && p === p.parent.right; ) p = p.parent;
					if (p !== g.root)
						for (
							p = p.parent,
								o = C(p.left) - p.size_left,
								f = d(p.left) - p.lf_left,
								p.size_left += o,
								p.lf_left += f;
							p !== g.root && (o !== 0 || f !== 0);
						)
							p.parent.left === p &&
								((p.parent.size_left += o), (p.parent.lf_left += f)),
								(p = p.parent);
				}
			}
		}),
		