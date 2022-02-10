import { defineCustomElement } from 'vue'

import ToolSample from "./components/ToolSample.ce.vue"
customElements.define('pbotool-sample', defineCustomElement(ToolSample))