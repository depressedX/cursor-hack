import '../../../require.js';
import '../../../exports.js';
import './path.js';
define(de[266], he([1, 0, 54]), function (ce /*require*/,
 e /*exports*/,
 t /*path*/) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.$EK = void 0),
				(e.$FK = E),
				(e.$GK = C),
				(e.$HK = d),
				(e.$IK = r),
				(e.$EK = Object.freeze({
					text: "text/plain",
					binary: "application/octet-stream",
					unknown: "application/unknown",
					markdown: "text/markdown",
					latex: "text/latex",
					uriList: "text/uri-list",
				}));
			const i = {
					".css": "text/css",
					".csv": "text/csv",
					".htm": "text/html",
					".html": "text/html",
					".ics": "text/calendar",
					".js": "text/javascript",
					".mjs": "text/javascript",
					".txt": "text/plain",
					".xml": "text/xml",
				},
				w = {
					".aac": "audio/x-aac",
					".avi": "video/x-msvideo",
					".bmp": "image/bmp",
					".flv": "video/x-flv",
					".gif": "image/gif",
					".ico": "image/x-icon",
					".jpe": "image/jpg",
					".jpeg": "image/jpg",
					".jpg": "image/jpg",
					".m1v": "video/mpeg",
					".m2a": "audio/mpeg",
					".m2v": "video/mpeg",
					".m3a": "audio/mpeg",
					".mid": "audio/midi",
					".midi": "audio/midi",
					".mk3d": "video/x-matroska",
					".mks": "video/x-matroska",
					".mkv": "video/x-matroska",
					".mov": "video/quicktime",
					".movie": "video/x-sgi-movie",
					".mp2": "audio/mpeg",
					".mp2a": "audio/mpeg",
					".mp3": "audio/mpeg",
					".mp4": "video/mp4",
					".mp4a": "audio/mp4",
					".mp4v": "video/mp4",
					".mpe": "video/mpeg",
					".mpeg": "video/mpeg",
					".mpg": "video/mpeg",
					".mpg4": "video/mp4",
					".mpga": "audio/mpeg",
					".oga": "audio/ogg",
					".ogg": "audio/ogg",
					".opus": "audio/opus",
					".ogv": "video/ogg",
					".png": "image/png",
					".psd": "image/vnd.adobe.photoshop",
					".qt": "video/quicktime",
					".spx": "audio/ogg",
					".svg": "image/svg+xml",
					".tga": "image/x-tga",
					".tif": "image/tiff",
					".tiff": "image/tiff",
					".wav": "audio/x-wav",
					".webm": "video/webm",
					".webp": "image/webp",
					".wma": "audio/x-ms-wma",
					".wmv": "video/x-ms-wmv",
					".woff": "application/font-woff",
				};
			function E(u) {
				const a = (0, t.$tc)(u),
					h = i[a.toLowerCase()];
				return h !== void 0 ? h : C(u);
			}
			function C(u) {
				const a = (0, t.$tc)(u);
				return w[a.toLowerCase()];
			}
			function d(u) {
				for (const a in w) if (w[a] === u) return a;
			}
			const m = /^(.+)\/(.+?)(;.+)?$/;
			function r(u, a) {
				const h = m.exec(u);
				return h
					? `${h[1].toLowerCase()}/${h[2].toLowerCase()}${h[3] ?? ""}`
					: a
						? void 0
						: u;
			}
		}),
		