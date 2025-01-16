define(de[2218], he([1, 0]), function (ce, e) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$Qk = t);
			function t(g) {
				const p = E(g);
				if (p && p.length > 0) return new Uint32Array(p);
			}
			let i = 0;
			const w = new Uint32Array(10);
			function E(g) {
				if (
					((i = 0),
					C(g, a, m.InitialConsonant),
					i > 0 ||
						(C(g, h, m.Vowel), i > 0) ||
						(C(g, c, m.FinalConsonant), i > 0) ||
						(C(g, n, m.CompatibilityJamo), i))
				)
					return w.subarray(0, i);
				if (g >= 44032 && g <= 55203) {
					const p = g - 44032,
						o = p % 588,
						f = Math.floor(p / 588),
						b = Math.floor(o / 28),
						s = (o % 28) - 1;
					if (
						(f < a.length
							? C(f, a, 0)
							: m.InitialConsonant + f - m.CompatibilityJamo < n.length &&
								C(m.InitialConsonant + f, n, m.CompatibilityJamo),
						b < h.length
							? C(b, h, 0)
							: m.Vowel + b - m.CompatibilityJamo < n.length &&
								C(m.Vowel + b - m.CompatibilityJamo, n, m.CompatibilityJamo),
						s >= 0 &&
							(s < c.length
								? C(s, c, 0)
								: m.FinalConsonant + s - m.CompatibilityJamo < n.length &&
									C(
										m.FinalConsonant + s - m.CompatibilityJamo,
										n,
										m.CompatibilityJamo,
									)),
						i > 0)
					)
						return w.subarray(0, i);
				}
			}
			function C(g, p, o) {
				g >= o && g < o + p.length && d(p[g - o]);
			}
			function d(g) {
				g !== r.NUL &&
					((w[i++] = g & 255),
					g >> 8 && (w[i++] = (g >> 8) & 255),
					g >> 16 && (w[i++] = (g >> 16) & 255));
			}
			var m;
			(function (g) {
				(g[(g.InitialConsonant = 4352)] = "InitialConsonant"),
					(g[(g.Vowel = 4449)] = "Vowel"),
					(g[(g.FinalConsonant = 4520)] = "FinalConsonant"),
					(g[(g.CompatibilityJamo = 12593)] = "CompatibilityJamo");
			})(m || (m = {}));
			var r;
			(function (g) {
				(g[(g.NUL = 0)] = "NUL"),
					(g[(g.A = 65)] = "A"),
					(g[(g.B = 66)] = "B"),
					(g[(g.C = 67)] = "C"),
					(g[(g.D = 68)] = "D"),
					(g[(g.E = 69)] = "E"),
					(g[(g.F = 70)] = "F"),
					(g[(g.G = 71)] = "G"),
					(g[(g.H = 72)] = "H"),
					(g[(g.I = 73)] = "I"),
					(g[(g.J = 74)] = "J"),
					(g[(g.K = 75)] = "K"),
					(g[(g.L = 76)] = "L"),
					(g[(g.M = 77)] = "M"),
					(g[(g.N = 78)] = "N"),
					(g[(g.O = 79)] = "O"),
					(g[(g.P = 80)] = "P"),
					(g[(g.Q = 81)] = "Q"),
					(g[(g.R = 82)] = "R"),
					(g[(g.S = 83)] = "S"),
					(g[(g.T = 84)] = "T"),
					(g[(g.U = 85)] = "U"),
					(g[(g.V = 86)] = "V"),
					(g[(g.W = 87)] = "W"),
					(g[(g.X = 88)] = "X"),
					(g[(g.Y = 89)] = "Y"),
					(g[(g.Z = 90)] = "Z"),
					(g[(g.a = 97)] = "a"),
					(g[(g.b = 98)] = "b"),
					(g[(g.c = 99)] = "c"),
					(g[(g.d = 100)] = "d"),
					(g[(g.e = 101)] = "e"),
					(g[(g.f = 102)] = "f"),
					(g[(g.g = 103)] = "g"),
					(g[(g.h = 104)] = "h"),
					(g[(g.i = 105)] = "i"),
					(g[(g.j = 106)] = "j"),
					(g[(g.k = 107)] = "k"),
					(g[(g.l = 108)] = "l"),
					(g[(g.m = 109)] = "m"),
					(g[(g.n = 110)] = "n"),
					(g[(g.o = 111)] = "o"),
					(g[(g.p = 112)] = "p"),
					(g[(g.q = 113)] = "q"),
					(g[(g.r = 114)] = "r"),
					(g[(g.s = 115)] = "s"),
					(g[(g.t = 116)] = "t"),
					(g[(g.u = 117)] = "u"),
					(g[(g.v = 118)] = "v"),
					(g[(g.w = 119)] = "w"),
					(g[(g.x = 120)] = "x"),
					(g[(g.y = 121)] = "y"),
					(g[(g.z = 122)] = "z");
			})(r || (r = {}));
			var u;
			(function (g) {
				(g[(g.fa = 24934)] = "fa"),
					(g[(g.fg = 26470)] = "fg"),
					(g[(g.fq = 29030)] = "fq"),
					(g[(g.fr = 29286)] = "fr"),
					(g[(g.ft = 29798)] = "ft"),
					(g[(g.fv = 30310)] = "fv"),
					(g[(g.fx = 30822)] = "fx"),
					(g[(g.hk = 27496)] = "hk"),
					(g[(g.hl = 27752)] = "hl"),
					(g[(g.ho = 28520)] = "ho"),
					(g[(g.ml = 27757)] = "ml"),
					(g[(g.nj = 27246)] = "nj"),
					(g[(g.nl = 27758)] = "nl"),
					(g[(g.np = 28782)] = "np"),
					(g[(g.qt = 29809)] = "qt"),
					(g[(g.rt = 29810)] = "rt"),
					(g[(g.sg = 26483)] = "sg"),
					(g[(g.sw = 30579)] = "sw");
			})(u || (u = {}));
			const a = new Uint8Array([
					r.r,
					r.R,
					r.s,
					r.e,
					r.E,
					r.f,
					r.a,
					r.q,
					r.Q,
					r.t,
					r.T,
					r.d,
					r.w,
					r.W,
					r.c,
					r.z,
					r.x,
					r.v,
					r.g,
				]),
				h = new Uint16Array([
					r.k,
					r.o,
					r.i,
					r.O,
					r.j,
					r.p,
					r.u,
					r.P,
					r.h,
					u.hk,
					u.ho,
					u.hl,
					r.y,
					r.n,
					u.nj,
					u.np,
					u.nl,
					r.b,
					r.m,
					u.ml,
					r.l,
				]),
				c = new Uint16Array([
					r.r,
					r.R,
					u.rt,
					r.s,
					u.sw,
					u.sg,
					r.e,
					r.f,
					u.fr,
					u.fa,
					u.fq,
					u.ft,
					u.fx,
					u.fv,
					u.fg,
					r.a,
					r.q,
					u.qt,
					r.t,
					r.T,
					r.d,
					r.w,
					r.c,
					r.z,
					r.x,
					r.v,
					r.g,
				]),
				n = new Uint16Array([
					r.r,
					r.R,
					u.rt,
					r.s,
					u.sw,
					u.sg,
					r.e,
					r.E,
					r.f,
					u.fr,
					u.fa,
					u.fq,
					u.ft,
					u.fx,
					u.fv,
					u.fg,
					r.a,
					r.q,
					r.Q,
					u.qt,
					r.t,
					r.T,
					r.d,
					r.w,
					r.W,
					r.c,
					r.z,
					r.x,
					r.v,
					r.g,
					r.k,
					r.o,
					r.i,
					r.O,
					r.j,
					r.p,
					r.u,
					r.P,
					r.h,
					u.hk,
					u.ho,
					u.hl,
					r.y,
					r.n,
					u.nj,
					u.np,
					u.nl,
					r.b,
					r.m,
					u.ml,
					r.l,
				]);
		}),
		