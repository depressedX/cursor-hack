define(de[1242], he([1, 0, 109]), function (ce, e, t) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }), (e.$ZSc = void 0);
			class i {
				constructor(E, C) {
					(this.value = E), (this.sortBy = C), (this.value = E.trim());
				}
				static suggestions(E) {
					const C = [
							"installed",
							"updates",
							"enabled",
							"disabled",
							"builtin",
							"featured",
							"popular",
							"recommended",
							"recentlyPublished",
							"workspaceUnsupported",
							"deprecated",
							"sort",
							"category",
							"tag",
							"ext",
							"id",
						],
						d = {
							sort: [
								"installs",
								"rating",
								"name",
								"publishedDate",
								"updateDate",
							],
							category: t.$Fn.map((a) => `"${a.toLowerCase()}"`),
							tag: [""],
							ext: [""],
							id: [""],
						},
						m = (a) => E.indexOf(a) > -1,
						r = d.sort.some((a) => m(`@sort:${a}`)),
						u = d.category.some((a) => m(`@category:${a}`));
					return C.flatMap((a) =>
						(r && a === "sort") || (u && a === "category")
							? []
							: a in d
								? d[a].map((h) => `@${a}:${h}${h === "" ? "" : " "}`)
								: m(`@${a}`)
									? []
									: [`@${a} `],
					);
				}
				static parse(E) {
					let C = "";
					return (
						(E = E.replace(/@sort:(\w+)(-\w*)?/g, (d, m, r) => ((C = m), ""))),
						new i(E, C)
					);
				}
				toString() {
					let E = this.value;
					return (
						this.sortBy && (E = `${E}${E ? " " : ""}@sort:${this.sortBy}`), E
					);
				}
				isValid() {
					return !/@outdated/.test(this.value);
				}
				equals(E) {
					return this.value === E.value && this.sortBy === E.sortBy;
				}
			}
			e.$ZSc = i;
		}),
		