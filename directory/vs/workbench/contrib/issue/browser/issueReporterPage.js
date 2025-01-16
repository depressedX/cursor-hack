define(de[3064], he([1, 0, 37, 4]), function (ce, e, t, i) {
			"use strict";
			Object.defineProperty(e, "__esModule", { value: !0 });
			const w = (0, t.$nf)((0, i.localize)(7218, null)),
				E = (0, t.$nf)((0, i.localize)(7219, null)),
				C = (0, t.$nf)((0, i.localize)(7220, null)),
				d = (0, t.$nf)((0, i.localize)(7221, null)),
				m = (0, t.$nf)((0, i.localize)(7222, null)),
				r = (0, t.$nf)((0, i.localize)(7223, null)),
				u = (0, i.localize)(7224, null);
			e.default = () => `
<div class="issue-reporter" id="issue-reporter">
	<div id="english" class="input-group hidden">${(0, t.$nf)((0, i.localize)(7225, null))}</div>

	<div id="review-guidance-help-text" class="input-group">${u}</div>

	<div class="section">
		<div class="input-group">
			<label class="inline-label" for="issue-type">${(0, t.$nf)((0, i.localize)(7226, null))}</label>
			<select id="issue-type" class="inline-form-control">
				<!-- To be dynamically filled -->
			</select>
		</div>

		<div class="input-group" id="problem-source">
			<label class="inline-label" for="issue-source">${(0, t.$nf)((0, i.localize)(7227, null))} <span class="required-input">*</span></label>
			<select id="issue-source" class="inline-form-control" required>
				<!-- To be dynamically filled -->
			</select>
			<div id="issue-source-empty-error" class="validation-error hidden" role="alert">${(0, t.$nf)((0, i.localize)(7228, null))}</div>
			<div id="problem-source-help-text" class="instructions hidden">${(0, t.$nf)((0, i.localize)(7229, null)).replace("{0}", () => `<span tabIndex=0 role="button" id="disableExtensions" class="workbenchCommand">${(0, t.$nf)((0, i.localize)(7230, null))}</span>`)}
			</div>

			<div id="extension-selection">
				<label class="inline-label" for="extension-selector">${(0, t.$nf)((0, i.localize)(7231, null))} <span class="required-input">*</span></label>
				<select id="extension-selector" class="inline-form-control">
					<!-- To be dynamically filled -->
				</select>
				<div id="extension-selection-validation-error" class="validation-error hidden" role="alert">${(0, t.$nf)((0, i.localize)(7232, null)).replace("{0}", () => '<span tabIndex=0 role="button" id="extensionBugsLink" class="workbenchCommand"><!-- To be dynamically filled --></span>')}</div>
				<div id="extension-selection-validation-error-no-url" class="validation-error hidden" role="alert">
					${(0, t.$nf)((0, i.localize)(7233, null))}
				</div>
			</div>
		</div>

		<div id="issue-title-container" class="input-group">
			<label class="inline-label" for="issue-title">${(0, t.$nf)((0, i.localize)(7234, null))} <span class="required-input">*</span></label>
			<input id="issue-title" type="text" class="inline-form-control" placeholder="${(0, t.$nf)((0, i.localize)(7235, null))}" required>
			<div id="issue-title-empty-error" class="validation-error hidden" role="alert">${(0, t.$nf)((0, i.localize)(7236, null))}</div>
			<div id="issue-title-length-validation-error" class="validation-error hidden" role="alert">${(0, t.$nf)((0, i.localize)(7237, null))}</div>
			<small id="similar-issues">
				<!-- To be dynamically filled -->
			</small>
		</div>

	</div>

	<div class="input-group description-section">
		<label for="description" id="issue-description-label">
			<!-- To be dynamically filled -->
		</label>
		<div class="instructions" id="issue-description-subtitle">
			<!-- To be dynamically filled -->
		</div>
		<div class="block-info-text">
			<textarea name="description" id="description" placeholder="${(0, t.$nf)((0, i.localize)(7238, null))}" required></textarea>
		</div>
		<div id="description-empty-error" class="validation-error hidden" role="alert">${(0, t.$nf)((0, i.localize)(7239, null))}</div>
		<div id="description-short-error" class="validation-error hidden" role="alert">${(0, t.$nf)((0, i.localize)(7240, null))}</div>
	</div>

	<div class="system-info" id="block-container">
		<div class="block block-extension-data">
			<input class="send-extension-data" aria-label="${r}" type="checkbox" id="includeExtensionData" checked/>
			<label class="extension-caption" id="extension-caption" for="includeExtensionData">
				${r}
				<span id="ext-loading" hidden></span>
				<span class="ext-parens" hidden>(</span><a href="#" class="showInfo" id="extension-id">${(0, t.$nf)((0, i.localize)(7241, null))}</a><span class="ext-parens" hidden>)</span>
			</label>
			<pre class="block-info" id="extension-data" placeholder="${(0, t.$nf)((0, i.localize)(7242, null))}" style="white-space: pre-wrap; user-select: text;">
				<!-- To be dynamically filled -->
			</pre>
		</div>

		<div class="block block-system">
			<input class="sendData" aria-label="${w}" type="checkbox" id="includeSystemInfo" checked/>
			<label class="caption" for="includeSystemInfo">
				${w}
				(<a href="#" class="showInfo">${(0, t.$nf)((0, i.localize)(7243, null))}</a>)
			</label>
			<div class="block-info hidden">
				<!-- To be dynamically filled -->
		</div>
		</div>
		<div class="block block-process">
			<input class="sendData" aria-label="${E}" type="checkbox" id="includeProcessInfo" checked/>
			<label class="caption" for="includeProcessInfo">
				${E}
				(<a href="#" class="showInfo">${(0, t.$nf)((0, i.localize)(7244, null))}</a>)
			</label>
			<pre class="block-info hidden">
				<code>
				<!-- To be dynamically filled -->
				</code>
			</pre>
		</div>
		<div class="block block-workspace">
			<input class="sendData" aria-label="${C}" type="checkbox" id="includeWorkspaceInfo" checked/>
			<label class="caption" for="includeWorkspaceInfo">
				${C}
				(<a href="#" class="showInfo">${(0, t.$nf)((0, i.localize)(7245, null))}</a>)
			</label>
			<pre id="systemInfo" class="block-info hidden">
				<code>
				<!-- To be dynamically filled -->
				</code>
			</pre>
		</div>
		<div class="block block-extensions">
			<input class="sendData" aria-label="${d}" type="checkbox" id="includeExtensions" checked/>
			<label class="caption" for="includeExtensions">
				${d}
				(<a href="#" class="showInfo">${(0, t.$nf)((0, i.localize)(7246, null))}</a>)
			</label>
			<div id="systemInfo" class="block-info hidden">
				<!-- To be dynamically filled -->
			</div>
		</div>
		<div class="block block-experiments">
			<input class="sendData" aria-label="${m}" type="checkbox" id="includeExperiments" checked/>
			<label class="caption" for="includeExperiments">
				${m}
				(<a href="#" class="showInfo">${(0, t.$nf)((0, i.localize)(7247, null))}</a>)
			</label>
			<pre class="block-info hidden">
				<!-- To be dynamically filled -->
			</pre>
		</div>
	</div>
</div>`;
		}),
		