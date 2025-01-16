define(de[2046], he([1, 0, 86, 574, 1080]), function (ce, e, t, i, w) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.transformConnectPostToGetRequest = d);
			const E = "application/";
			function C(m, r) {
				return r
					? t.protoBase64
							.enc(m)
							.replace(/\+/g, "-")
							.replace(/\//g, "_")
							.replace(/=+$/, "")
					: encodeURIComponent(new TextDecoder().decode(m));
			}
			function d(m, r, u) {
				let a = `?connect=v${w.protocolVersion}`;
				const h = m.header.get(i.headerContentType);
				h?.indexOf(E) === 0 &&
					(a += "&encoding=" + encodeURIComponent(h.slice(E.length)));
				const c = m.header.get(i.headerUnaryEncoding);
				c !== null &&
					c !== "identity" &&
					((a += "&compression=" + encodeURIComponent(c)), (u = !0)),
					u && (a += "&base64=1"),
					(a += "&message=" + C(r, u));
				const n = m.url + a,
					g = new Headers(m.header);
				return (
					[
						i.headerProtocolVersion,
						i.headerContentType,
						i.headerUnaryContentLength,
						i.headerUnaryEncoding,
						i.headerUnaryAcceptEncoding,
					].forEach((p) => g.delete(p)),
					{ ...m, init: { ...m.init, method: "GET" }, url: n, header: g }
				);
			}
		}),
		