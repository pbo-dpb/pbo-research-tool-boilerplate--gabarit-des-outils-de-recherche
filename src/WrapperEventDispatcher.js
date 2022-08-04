export default class WrapperEventDispatcher {

    /**
     * Class to standardize communications with the web component's parent page.
     * ABCMS will listen for the event dispatched in the dispatch() method and update
     * the wrapper UI acordingly
     * @param {string|} pageTitle What should be displayed in the page's H1 tag. Will not be updated if null.
     * @param {array|null} breadcrumbStack An array of items {name, url} that should be presented as breadcrumbs. Not updated when null.
     * @param {mixed} userInfo Any object that should bubble up to the wrapper.
     */
    constructor(pageTitle, breadcrumbStack, userInfo) {
        this.pageTitle = pageTitle;
        this.breadcrumbStack = breadcrumbStack;
    }

    dispatch() {
        const event = new CustomEvent("navigation-context-update", {
            bubbles: true,
            cancelable: false,
            composed: true,
            detail: {
                pageTitle: this.pageTitle,
                breadcrumbStack: this.breadcrumbStack,
                userInfo: this.userInfo
            }
        });
        document.dispatchEvent(event);
    }

}