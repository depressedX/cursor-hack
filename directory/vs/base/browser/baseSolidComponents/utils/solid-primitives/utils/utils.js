import '../../../../../../../require.js';
import '../../../../../../../exports.js';
import '../../../../../../../external/solid/solid.js';
import '../../../../../../../external/solid/web.js';
import './types.js';
define(de[302], he([1, 0, 13, 2, 2187]), function (ce /*require*/,
 e /*exports*/,
 t /*solid*/,
 i /*web*/,
 w /*types*/) {
		"use strict";
		Object.defineProperty(e, "__esModule", { value: !0 }),
			(e.$mkb =
				e.$jkb =
				e.$ikb =
				e.keys =
				e.$gkb =
				e.$dkb =
				e.$ckb =
				e.$bkb =
				e.$akb =
				e.$_jb =
				e.$$jb =
				e.$8jb =
				e.$7jb =
				e.$6jb =
				e.$5jb =
				e.$3jb =
				e.$2jb =
				e.$1jb =
				e.$Zjb =
				e.$Yjb =
				e.$Xjb =
				e.noop =
				e.$Vjb =
				e.$Ujb =
				e.$Tjb =
				e.isServer =
					void 0),
			(e.$4jb = r),
			(e.$9jb = n),
			(e.$0jb = g),
			(e.$ekb = y),
			(e.$fkb = $),
			(e.$kkb = S),
			(e.$lkb = I),
			(e.$nkb = T),
			Object.defineProperty(e, "isServer", {
				enumerable: !0,
				get: function () {
					return i.isServer;
				},
			}),
			Yi(w, e),
			(e.$Tjb = !i.isServer),
			(e.$Ujb = e.$Tjb && !!t.DEV),
			(e.$Vjb = !e.$Ujb),
			(e.noop = () => {});
		const E = () => !0;
		e.$Xjb = E;
		const C = () => !1;
		e.$Yjb = C;
		const d = (P, k) => P === k;
		(e.$Zjb = d), (e.$1jb = { equals: !1 }), (e.$2jb = { internal: !0 });
		const m = (P, k) => P instanceof k || (P && P.constructor === k);
		e.$3jb = m;
		function r(P) {
			return P !== null && (typeof P == "object" || typeof P == "function");
		}
		const u = (P) => P != null;
		e.$5jb = u;
		const a = (P) => P.filter(e.$5jb);
		e.$6jb = a;
		const h = (P, k) => (P < k ? -1 : P > k ? 1 : 0);
		e.$7jb = h;
		const c = (P, k) =>
			P === k || (P.length === k.length && P.every((L, D) => L === k[D]));
		e.$8jb = c;
		function n(P) {
			return (...k) => {
				for (const L of P) {
					const D = L && L(...k);
				}
			};
		}
		function g(P) {
			return (...k) => {
				for (let L = P.length - 1; L >= 0; L--) {
					const D = P[L],
						M = D && D(...k);
				}
			};
		}
		const p = (P, k, L) => Math.min(Math.max(P, k), L);
		e.$$jb = p;
		const o = (P) => (typeof P == "function" && !P.length ? P() : P);
		e.$_jb = o;
		const f = (P) => (Array.isArray(P) ? P : P ? [P] : []);
		e.$akb = f;
		const b = (P) => P.map((k) => (0, e.$_jb)(k));
		e.$bkb = b;
		const s = (P, k) => {
			const L = (0, e.$_jb)(P),
				D = typeof L != null && k(L);
		};
		e.$ckb = s;
		const l = (P) => (typeof P == "function" ? P : () => P);
		e.$dkb = l;
		function y(P, ...k) {
			return typeof P == "function" ? P(...k) : P;
		}
		function $(P, k, L) {
			const D = Array.isArray(P);
			let M,
				N = !0;
			return (A) => {
				let R;
				if (D) {
					R = Array(P.length);
					for (let B = 0; B < P.length; B++) R[B] = P[B]();
				} else R = P();
				if (N) return (N = !1), (M = R), L;
				const O = (0, t.untrack)(() => k(R, M, A));
				return (M = R), O;
			};
		}
		(e.$gkb = Object.entries),
			(e.keys = Object.keys),
			(e.$ikb = e.$Ujb
				? (P) => ((0, t.getOwner)() ? (0, t.onCleanup)(P) : P)
				: t.onCleanup);
		const v = () => {
			let P = [];
			const k = () => (P = []);
			return {
				push: (...L) => P.push(...L),
				execute(L, D, M, N) {
					P.forEach((A) => A(L, D, M, N)), k();
				},
				clear: k,
			};
		};
		e.$jkb = v;
		function S(P) {
			let k = 0,
				L;
			return (
				(0, t.onCleanup)(() => (k = 0)),
				(...D) => {
					(L = D), k++, queueMicrotask(() => --k === 0 && P(...L));
				}
			);
		}
		function I(P, k, L) {
			if (i.isServer) return (0, t.createSignal)(P, L);
			if (t.sharedConfig.context) {
				const [D, M] = (0, t.createSignal)(P, L);
				return (0, t.onMount)(() => M(() => k())), [D, M];
			}
			return (0, t.createSignal)(k(), L);
		}
		e.$mkb = I;
		function T(P, k, L, D) {
			const M = P.length,
				N = k.length;
			let A = 0;
			if (!N) {
				for (; A < M; A++) L(P[A]);
				return;
			}
			if (!M) {
				for (; A < N; A++) D(k[A]);
				return;
			}
			for (; A < N && k[A] === P[A]; A++);
			let R, O;
			(k = k.slice(A)), (P = P.slice(A));
			for (R of k) P.includes(R) || D(R);
			for (O of P) k.includes(O) || L(O);
		}
	})
