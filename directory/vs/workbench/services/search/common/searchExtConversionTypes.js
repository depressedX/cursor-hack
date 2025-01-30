import '../../../../../require.js';
import '../../../../../exports.js';
import '../../../../base/common/arrays.js';
import './search.js';
import './searchExtTypes.js';
define(Pe[197], Ne([1, 0, 20, 41, 83]), function (we, t, e, r, S) {
			"use strict";
			Object.defineProperty(t, "__esModule", { value: !0 }),
				(t.$yid = t.$xid = t.$uid = void 0),
				(t.$vid = n),
				(t.$wid = p),
				(t.$zid = g);
			function N(c) {
				return "uri" in c && "ranges" in c && "preview" in c;
			}
			function P(c) {
				return c.folderOptions.map((h) => ({
					folder: h.folder,
					excludes: h.excludes.map(($) =>
						typeof $ == "string" ? $ : $.pattern,
					),
					includes: h.includes,
					useGlobalIgnoreFiles: h.useIgnoreFiles.global,
					useIgnoreFiles: h.useIgnoreFiles.local,
					useParentIgnoreFiles: h.useIgnoreFiles.parent,
					followSymlinks: h.followSymlinks,
					maxResults: c.maxResults,
					session: c.session,
				}));
			}
			class I {
				constructor(h) {
					this.a = h;
				}
				provideFileSearchResults(h, $, T) {
					return (async () => {
						const u = P($);
						return Promise.all(
							u.map((s) =>
								this.a.provideFileSearchResults({ pattern: h }, s, T),
							),
						);
					})().then((u) => (0, e.$Lb)(u).flat());
				}
			}
			t.$uid = I;
			function l(c) {
				return c.folderOptions.map((h) => ({
					folder: h.folder,
					excludes: h.excludes.map(($) =>
						typeof $ == "string" ? $ : $.pattern,
					),
					includes: h.includes,
					useGlobalIgnoreFiles: h.useIgnoreFiles.global,
					useIgnoreFiles: h.useIgnoreFiles.local,
					useParentIgnoreFiles: h.useIgnoreFiles.parent,
					followSymlinks: h.followSymlinks,
					maxResults: c.maxResults,
					previewOptions: n(c.previewOptions),
					maxFileSize: c.maxFileSize,
					encoding: h.encoding,
					afterContext: c.surroundingContext,
					beforeContext: c.surroundingContext,
				}));
			}
			function n(c) {
				return {
					matchLines: c?.matchLines ?? r.$M7.matchLines,
					charsPerLine: c?.charsPerLine ?? r.$M7.charsPerLine,
				};
			}
			function p(c) {
				if (N(c)) {
					const h = (0, e.$6b)(c.ranges).map(($, T) => {
						const u = (0, e.$6b)(c.preview.matches)[T];
						return { sourceRange: $, previewRange: u };
					});
					return new S.$h7(c.uri, h, c.preview.text);
				} else return new S.$i7(c.uri, c.text, c.lineNumber);
			}
			class y {
				constructor(h) {
					this.a = h;
				}
				provideTextSearchResults(h, $, T, a) {
					const u = (o) => {
						k(o) && T.report(p(o));
					};
					return (async () =>
						(0, e.$Lb)(
							await Promise.all(
								l($).map((o) =>
									this.a.provideTextSearchResults(
										h,
										o,
										{ report: (w) => u(w) },
										a,
									),
								),
							),
						).reduce((o, w) => ({ limitHit: o.limitHit || w.limitHit }), {
							limitHit: !1,
						}))().then((o) => ({
						limitHit: o.limitHit,
						message: (0, e.$Lb)((0, e.$6b)(o.message)),
					}));
				}
			}
			t.$xid = y;
			class d {
				constructor(h) {
					this.a = h;
				}
				provideAITextSearchResults(h, $, T, a) {
					const u = (o) => {
						k(o) && T.report(p(o));
					};
					return (async () =>
						(0, e.$Lb)(
							await Promise.all(
								l($).map((o) =>
									this.a.provideAITextSearchResults(
										h,
										o,
										{ report: (w) => u(w) },
										a,
									),
								),
							),
						).reduce((o, w) => ({ limitHit: o.limitHit || w.limitHit }), {
							limitHit: !1,
						}))().then((o) => ({
						limitHit: o.limitHit,
						message: (0, e.$Lb)((0, e.$6b)(o.message)),
					}));
				}
			}
			t.$yid = d;
			function k(c) {
				if (g(c)) {
					if (Array.isArray(c.ranges)) {
						if (!Array.isArray(c.preview.matches))
							return (
								console.warn(
									"INVALID - A text search provider match's`ranges` and`matches` properties must have the same type.",
								),
								!1
							);
						if (c.preview.matches.length !== c.ranges.length)
							return (
								console.warn(
									"INVALID - A text search provider match's`ranges` and`matches` properties must have the same length.",
								),
								!1
							);
					} else if (Array.isArray(c.preview.matches))
						return (
							console.warn(
								"INVALID - A text search provider match's`ranges` and`matches` properties must have the same length.",
							),
							!1
						);
				}
				return !0;
			}
			function g(c) {
				return !!c.preview;
			}
		}),
		