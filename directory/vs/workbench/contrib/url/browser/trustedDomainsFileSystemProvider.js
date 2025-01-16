define(
			de[3278],
			he([1, 0, 6, 187, 22, 21, 76, 1018, 28, 5]),
			function (ce, e, t, i, w, E, C, d, m, r) {
				"use strict";
				Object.defineProperty(e, "__esModule", { value: !0 }),
					(e.$sSc = void 0);
				const u = "trustedDomains",
					a = {
						type: w.FileType.File,
						ctime: Date.now(),
						mtime: Date.now(),
						size: 0,
					},
					h = `// Links matching one or more entries in the list below can be opened without link protection.
// The following examples show what entries can look like:
// - "https://microsoft.com": Matches this specific domain using https
// - "https://microsoft.com:8080": Matches this specific domain on this port using https
// - "https://microsoft.com:*": Matches this specific domain on any port using https
// - "https://microsoft.com/foo": Matches https://microsoft.com/foo and https://microsoft.com/foo/bar,
//   but not https://microsoft.com/foobar or https://microsoft.com/bar
// - "https://*.microsoft.com": Match all domains ending in "microsoft.com" using https
// - "microsoft.com": Match this specific domain using either http or https
// - "*.microsoft.com": Match all domains ending in "microsoft.com" using either http or https
// - "http://192.168.0.1: Matches this specific IP using http
// - "http://192.168.0.*: Matches all IP's with this prefix using http
// - "*": Match all domains using either http or https
//
`,
					c = `//
// You can use the "Manage Trusted Domains" command to open this file.
// Save this file to apply the trusted domains rules.
`,
					n = `[
	// "https://microsoft.com"
]`;
				function g(o, f, b) {
					let s = h;
					return (
						o.length > 0
							? ((s += `// By default, VS Code trusts "localhost" as well as the following domains:
`),
								o.forEach((l) => {
									s += `// - "${l}"
`;
								}))
							: (s += `// By default, VS Code trusts "localhost".
`),
						(s += c),
						(s += b
							? `
// Currently configuring trust for ${b}
`
							: ""),
						f.length === 0 ? (s += n) : (s += JSON.stringify(f, null, 2)),
						s
					);
				}
				let p = class {
					static {
						this.ID = "workbench.contrib.trustedDomainsFileSystemProvider";
					}
					constructor(f, b, s) {
						(this.a = f),
							(this.b = b),
							(this.c = s),
							(this.capabilities =
								w.FileSystemProviderCapabilities.FileReadWrite),
							(this.onDidChangeCapabilities = t.Event.None),
							(this.onDidChangeFile = t.Event.None),
							this.a.registerProvider(u, this);
					}
					stat(f) {
						return Promise.resolve(a);
					}
					async readFile(f) {
						let b = this.b.get(d.$TXb, E.StorageScope.APPLICATION);
						const s = f.fragment,
							{ defaultTrustedDomains: l, trustedDomains: y } =
								await this.c.invokeFunction(d.$WXb);
						return (
							(!b ||
								b.indexOf(h) === -1 ||
								b.indexOf(c) === -1 ||
								b.indexOf(s ?? "") === -1 ||
								[...l, ...y].some((v) => !(0, m.$wg)(b).includes(v))) &&
								(b = g(l, y, s)),
							C.$Te.fromString(b).buffer
						);
					}
					writeFile(f, b, s) {
						try {
							const l = C.$Te.wrap(b).toString(),
								y = (0, i.$do)(l);
							this.b.store(
								d.$TXb,
								l,
								E.StorageScope.APPLICATION,
								E.StorageTarget.USER,
							),
								this.b.store(
									d.$SXb,
									JSON.stringify(y) || "",
									E.StorageScope.APPLICATION,
									E.StorageTarget.USER,
								);
						} catch {}
						return Promise.resolve();
					}
					watch(f, b) {
						return { dispose() {} };
					}
					mkdir(f) {
						return Promise.resolve(void 0);
					}
					readdir(f) {
						return Promise.resolve(void 0);
					}
					delete(f, b) {
						return Promise.resolve(void 0);
					}
					rename(f, b, s) {
						return Promise.resolve(void 0);
					}
				};
				(e.$sSc = p),
					(e.$sSc = p = Ne([j(0, w.$ll), j(1, E.$lq), j(2, r.$Li)], p));
			},
		);
	var xi =
		(this && this.__importDefault) ||
		function (ce) {
			return ce && ce.__esModule ? ce : { default: ce };
		};
	