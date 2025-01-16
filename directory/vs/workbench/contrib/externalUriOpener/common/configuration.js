define(de[1033], he([1, 0, 81, 224, 4, 30]), function (ce, e, t, i, w, E) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 }),
				(e.externalUriOpenersConfigurationNode =
					e.externalUriOpenersSettingId =
					e.defaultExternalUriOpenerId =
						void 0),
				(e.updateContributedOpeners = m),
				(w = mt(w)),
				(e.defaultExternalUriOpenerId = "default"),
				(e.externalUriOpenersSettingId = "workbench.externalUriOpeners");
			const C = { type: "string", enum: [] },
				d =
					"\n- `https://microsoft.com`: Matches this specific domain using https\n- `https://microsoft.com:8080`: Matches this specific domain on this port using https\n- `https://microsoft.com:*`: Matches this specific domain on any port using https\n- `https://microsoft.com/foo`: Matches `https://microsoft.com/foo` and `https://microsoft.com/foo/bar`, but not `https://microsoft.com/foobar` or `https://microsoft.com/bar`\n- `https://*.microsoft.com`: Match all domains ending in `microsoft.com` using https\n- `microsoft.com`: Match this specific domain using either http or https\n- `*.microsoft.com`: Match all domains ending in `microsoft.com` using either http or https\n- `http://192.168.0.1`: Matches this specific IP using http\n- `http://192.168.0.*`: Matches all IP's with this prefix using http\n- `*`: Match all domains using either http or https";
			e.externalUriOpenersConfigurationNode = {
				...i.$v6,
				properties: {
					[e.externalUriOpenersSettingId]: {
						type: "object",
						markdownDescription: w.localize(6646, null),
						defaultSnippets: [{ body: { "example.com": "$1" } }],
						additionalProperties: {
							anyOf: [
								{
									type: "string",
									markdownDescription: w.localize(6647, null, d),
								},
								{
									type: "string",
									markdownDescription: w.localize(6648, null, d),
									enum: [e.defaultExternalUriOpenerId],
									enumDescriptions: [w.localize(6649, null)],
								},
								C,
							],
						},
					},
				},
			};
			function m(r, u) {
				(C.enum = r),
					(C.enumDescriptions = u),
					E.$Io
						.as(t.$No.Configuration)
						.notifyConfigurationSchemaUpdated(
							e.externalUriOpenersConfigurationNode,
						);
			}
		}),
		