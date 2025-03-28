const {addControllers, addHook} = WebCardinal.preload;

function defineWebCardinalComponents() {
    const {define} = WebCardinal.components;

    define('breadcrumb-navigator');
}

addHook('beforeAppLoads', async () => {
    try {
        defineWebCardinalComponents();
        const {BreadcrumbNavigatorController} = await import("../components/breadcrumb-navigator/BreadcrumbNavigatorController.js");
        addControllers({BreadcrumbNavigatorController});

        await import("../components/share-did/share-did.js");

    } catch (error) {
        console.error('Error while defining WebCardinal components', error);
    }
});