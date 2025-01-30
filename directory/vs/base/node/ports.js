import '../../../require.js';
import '../../../exports.js';
import '../../../net.js';
define(Pe[453], Ne([1, 0, 105]), function (we, t, e) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }),
				(t.$_g = void 0),
				(t.$$g = r),
				(t.$ah = N),
				(e = tt(e));
			function r(I, l, n, p = 1) {
				let y = !1;
				return new Promise((d) => {
					const k = setTimeout(() => {
						if (!y) return (y = !0), d(0);
					}, n);
					S(I, l, p, (g) => {
						if (!y) return (y = !0), clearTimeout(k), d(g);
					});
				});
			}
			function S(I, l, n, p) {
				if (l === 0) return p(0);
				const y = new e.Socket();
				y.once("connect", () => (P(y), S(I + n, l - 1, n, p))),
					y.once("data", () => {}),
					y.once(
						"error",
						(d) => (
							P(y), d.code !== "ECONNREFUSED" ? S(I + n, l - 1, n, p) : p(I)
						),
					),
					y.connect(I, "127.0.0.1");
			}
			t.$_g = {
				1: !0,
				7: !0,
				9: !0,
				11: !0,
				13: !0,
				15: !0,
				17: !0,
				19: !0,
				20: !0,
				21: !0,
				22: !0,
				23: !0,
				25: !0,
				37: !0,
				42: !0,
				43: !0,
				53: !0,
				69: !0,
				77: !0,
				79: !0,
				87: !0,
				95: !0,
				101: !0,
				102: !0,
				103: !0,
				104: !0,
				109: !0,
				110: !0,
				111: !0,
				113: !0,
				115: !0,
				117: !0,
				119: !0,
				123: !0,
				135: !0,
				137: !0,
				139: !0,
				143: !0,
				161: !0,
				179: !0,
				389: !0,
				427: !0,
				465: !0,
				512: !0,
				513: !0,
				514: !0,
				515: !0,
				526: !0,
				530: !0,
				531: !0,
				532: !0,
				540: !0,
				548: !0,
				554: !0,
				556: !0,
				563: !0,
				587: !0,
				601: !0,
				636: !0,
				989: !0,
				990: !0,
				993: !0,
				995: !0,
				1719: !0,
				1720: !0,
				1723: !0,
				2049: !0,
				3659: !0,
				4045: !0,
				5060: !0,
				5061: !0,
				6e3: !0,
				6566: !0,
				6665: !0,
				6666: !0,
				6667: !0,
				6668: !0,
				6669: !0,
				6697: !0,
				10080: !0,
			};
			function N(I, l, n, p = "127.0.0.1") {
				let y = !1,
					d,
					k = 1;
				const g = e.createServer({ pauseOnConnect: !0 });
				function c(h, $) {
					y ||
						((y = !0),
						g.removeAllListeners(),
						g.close(),
						d && clearTimeout(d),
						$(h));
				}
				return new Promise((h) => {
					(d = setTimeout(() => {
						c(0, h);
					}, n)),
						g.on("listening", () => {
							c(I, h);
						}),
						g.on("error", ($) => {
							$ && ($.code === "EADDRINUSE" || $.code === "EACCES") && k < l
								? (I++, k++, g.listen(I, p))
								: c(0, h);
						}),
						g.on("close", () => {
							c(0, h);
						}),
						g.listen(I, p);
				});
			}
			function P(I) {
				try {
					I.removeAllListeners("connect"),
						I.removeAllListeners("error"),
						I.end(),
						I.destroy(),
						I.unref();
				} catch (l) {
					console.error(l);
				}
			}
		}),
		