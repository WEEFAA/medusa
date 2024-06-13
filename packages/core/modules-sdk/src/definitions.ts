import { ModuleDefinition } from "@medusajs/types"
import { upperCaseFirst } from "@medusajs/utils"
import { MODULE_RESOURCE_TYPE, MODULE_SCOPE } from "./types"

export enum LinkModuleUtils {
  REMOTE_QUERY = "remoteQuery",
  REMOTE_LINK = "remoteLink",
}

// TODO: Remove this enum and use the one from @medusajs/utils
export enum Modules {
  AUTH = "auth",
  CACHE = "cacheService",
  CART = "cart",
  CUSTOMER = "customer",
  EVENT_BUS = "eventBus",
  INVENTORY = "inventoryService",
  LINK = "linkModules",
  PAYMENT = "payment",
  PRICING = "pricingService",
  PRODUCT = "productService",
  PROMOTION = "promotion",
  SALES_CHANNEL = "salesChannel",
  TAX = "tax",
  FULFILLMENT = "fulfillment",
  STOCK_LOCATION = "stockLocationService",
  USER = "user",
  WORKFLOW_ENGINE = "workflows",
  REGION = "region",
  ORDER = "order",
  API_KEY = "apiKey",
  STORE = "store",
  CURRENCY = "currency",
  FILE = "file",
  NOTIFICATION = "notification",
}

export enum ModuleRegistrationName {
  AUTH = "authModuleService",
  CACHE = "cacheService",
  CART = "cartModuleService",
  CUSTOMER = "customerModuleService",
  EVENT_BUS = "eventBusModuleService",
  INVENTORY = "inventoryService",
  PAYMENT = "paymentModuleService",
  PRICING = "pricingModuleService",
  PRODUCT = "productModuleService",
  PROMOTION = "promotionModuleService",
  SALES_CHANNEL = "salesChannelModuleService",
  FULFILLMENT = "fulfillmentModuleService",
  STOCK_LOCATION = "stockLocationService",
  TAX = "taxModuleService",
  USER = "userModuleService",
  WORKFLOW_ENGINE = "workflowsModuleService",
  REGION = "regionModuleService",
  ORDER = "orderModuleService",
  API_KEY = "apiKeyModuleService",
  STORE = "storeModuleService",
  CURRENCY = "currencyModuleService",
  FILE = "fileModuleService",
  NOTIFICATION = "notificationModuleService",
}

export const MODULE_PACKAGE_NAMES = {
  [Modules.AUTH]: "@medusajs/auth",
  [Modules.CACHE]: "@medusajs/cache-inmemory",
  [Modules.CART]: "@medusajs/cart",
  [Modules.CUSTOMER]: "@medusajs/customer",
  [Modules.EVENT_BUS]: "@medusajs/event-bus-local",
  [Modules.INVENTORY]: "@medusajs/inventory-next", // TODO: To be replaced when current `@medusajs/inventory` is deprecated
  [Modules.LINK]: "@medusajs/link-modules",
  [Modules.PAYMENT]: "@medusajs/payment",
  [Modules.PRICING]: "@medusajs/pricing",
  [Modules.PRODUCT]: "@medusajs/product",
  [Modules.PROMOTION]: "@medusajs/promotion",
  [Modules.SALES_CHANNEL]: "@medusajs/sales-channel",
  [Modules.FULFILLMENT]: "@medusajs/fulfillment",
  [Modules.STOCK_LOCATION]: "@medusajs/stock-location-next", // TODO: To be replaced when current `@medusajs/stock-location` is deprecated
  [Modules.TAX]: "@medusajs/tax",
  [Modules.USER]: "@medusajs/user",
  [Modules.WORKFLOW_ENGINE]: "@medusajs/workflow-engine-inmemory",
  [Modules.REGION]: "@medusajs/region",
  [Modules.ORDER]: "@medusajs/order",
  [Modules.API_KEY]: "@medusajs/api-key",
  [Modules.STORE]: "@medusajs/store",
  [Modules.CURRENCY]: "@medusajs/currency",
  [Modules.FILE]: "@medusajs/file",
  [Modules.NOTIFICATION]: "@medusajs/notification",
}

export const ModulesDefinition: { [key: string | Modules]: ModuleDefinition } =
  {
    [Modules.EVENT_BUS]: {
      key: Modules.EVENT_BUS,
      registrationName: ModuleRegistrationName.EVENT_BUS,
      defaultPackage: MODULE_PACKAGE_NAMES[Modules.EVENT_BUS],
      label: upperCaseFirst(ModuleRegistrationName.EVENT_BUS),
      isRequired: true,
      dependencies: ["logger"],
      defaultModuleDeclaration: {
        scope: MODULE_SCOPE.INTERNAL,
        resources: MODULE_RESOURCE_TYPE.SHARED,
      },
    },
    [Modules.STOCK_LOCATION]: {
      key: Modules.STOCK_LOCATION,
      registrationName: ModuleRegistrationName.STOCK_LOCATION,
      defaultPackage: false,
      label: upperCaseFirst(ModuleRegistrationName.STOCK_LOCATION),
      isRequired: false,
      isQueryable: true,
      dependencies: [ModuleRegistrationName.EVENT_BUS],
      defaultModuleDeclaration: {
        scope: MODULE_SCOPE.INTERNAL,
        resources: MODULE_RESOURCE_TYPE.SHARED,
      },
    },
    [Modules.INVENTORY]: {
      key: Modules.INVENTORY,
      registrationName: ModuleRegistrationName.INVENTORY,
      defaultPackage: false,
      label: upperCaseFirst(ModuleRegistrationName.INVENTORY),
      isRequired: false,
      isQueryable: true,
      dependencies: [ModuleRegistrationName.EVENT_BUS],
      defaultModuleDeclaration: {
        scope: MODULE_SCOPE.INTERNAL,
        resources: MODULE_RESOURCE_TYPE.SHARED,
      },
    },
    [Modules.CACHE]: {
      key: Modules.CACHE,
      registrationName: ModuleRegistrationName.CACHE,
      defaultPackage: MODULE_PACKAGE_NAMES[Modules.CACHE],
      label: upperCaseFirst(ModuleRegistrationName.CACHE),
      isRequired: true,
      defaultModuleDeclaration: {
        scope: MODULE_SCOPE.INTERNAL,
        resources: MODULE_RESOURCE_TYPE.SHARED,
      },
    },
    [Modules.PRODUCT]: {
      key: Modules.PRODUCT,
      registrationName: ModuleRegistrationName.PRODUCT,
      defaultPackage: false,
      label: upperCaseFirst(ModuleRegistrationName.PRODUCT),
      isRequired: false,
      isQueryable: true,
      dependencies: [ModuleRegistrationName.EVENT_BUS, "logger"],
      defaultModuleDeclaration: {
        scope: MODULE_SCOPE.INTERNAL,
        resources: MODULE_RESOURCE_TYPE.SHARED,
      },
    },
    [Modules.PRICING]: {
      key: Modules.PRICING,
      registrationName: ModuleRegistrationName.PRICING,
      defaultPackage: false,
      label: upperCaseFirst(ModuleRegistrationName.PRICING),
      isRequired: false,
      isQueryable: true,
      dependencies: [ModuleRegistrationName.EVENT_BUS, "logger"],
      defaultModuleDeclaration: {
        scope: MODULE_SCOPE.INTERNAL,
        resources: MODULE_RESOURCE_TYPE.SHARED,
      },
    },
    [Modules.PROMOTION]: {
      key: Modules.PROMOTION,
      registrationName: ModuleRegistrationName.PROMOTION,
      defaultPackage: false,
      label: upperCaseFirst(ModuleRegistrationName.PROMOTION),
      isRequired: false,
      isQueryable: true,
      dependencies: ["logger"],
      defaultModuleDeclaration: {
        scope: MODULE_SCOPE.INTERNAL,
        resources: MODULE_RESOURCE_TYPE.SHARED,
      },
    },
    [Modules.AUTH]: {
      key: Modules.AUTH,
      registrationName: ModuleRegistrationName.AUTH,
      defaultPackage: false,
      label: upperCaseFirst(ModuleRegistrationName.AUTH),
      isRequired: false,
      isQueryable: true,
      dependencies: ["logger"],
      defaultModuleDeclaration: {
        scope: MODULE_SCOPE.INTERNAL,
        resources: MODULE_RESOURCE_TYPE.SHARED,
      },
    },
    [Modules.WORKFLOW_ENGINE]: {
      key: Modules.WORKFLOW_ENGINE,
      registrationName: ModuleRegistrationName.WORKFLOW_ENGINE,
      defaultPackage: false,
      label: upperCaseFirst(ModuleRegistrationName.WORKFLOW_ENGINE),
      isRequired: false,
      isQueryable: true,
      dependencies: ["logger"],
      defaultModuleDeclaration: {
        scope: MODULE_SCOPE.INTERNAL,
        resources: MODULE_RESOURCE_TYPE.SHARED,
      },
    },
    [Modules.SALES_CHANNEL]: {
      key: Modules.SALES_CHANNEL,
      registrationName: ModuleRegistrationName.SALES_CHANNEL,
      defaultPackage: false,
      label: upperCaseFirst(ModuleRegistrationName.SALES_CHANNEL),
      isRequired: false,
      isQueryable: true,
      dependencies: ["logger"],
      defaultModuleDeclaration: {
        scope: MODULE_SCOPE.INTERNAL,
        resources: MODULE_RESOURCE_TYPE.SHARED,
      },
    },
    [Modules.FULFILLMENT]: {
      key: Modules.FULFILLMENT,
      registrationName: ModuleRegistrationName.FULFILLMENT,
      defaultPackage: false,
      label: upperCaseFirst(ModuleRegistrationName.FULFILLMENT),
      isRequired: false,
      isQueryable: true,
      dependencies: ["logger", ModuleRegistrationName.EVENT_BUS],
      defaultModuleDeclaration: {
        scope: MODULE_SCOPE.INTERNAL,
        resources: MODULE_RESOURCE_TYPE.SHARED,
      },
    },
    [Modules.CART]: {
      key: Modules.CART,
      registrationName: ModuleRegistrationName.CART,
      defaultPackage: false,
      label: upperCaseFirst(ModuleRegistrationName.CART),
      isRequired: false,
      isQueryable: true,
      dependencies: ["logger"],
      defaultModuleDeclaration: {
        scope: MODULE_SCOPE.INTERNAL,
        resources: MODULE_RESOURCE_TYPE.SHARED,
      },
    },
    [Modules.CUSTOMER]: {
      key: Modules.CUSTOMER,
      registrationName: ModuleRegistrationName.CUSTOMER,
      defaultPackage: false,
      label: upperCaseFirst(ModuleRegistrationName.CUSTOMER),
      isRequired: false,
      isQueryable: true,
      dependencies: ["logger"],
      defaultModuleDeclaration: {
        scope: MODULE_SCOPE.INTERNAL,
        resources: MODULE_RESOURCE_TYPE.SHARED,
      },
    },
    [Modules.PAYMENT]: {
      key: Modules.PAYMENT,
      registrationName: ModuleRegistrationName.PAYMENT,
      defaultPackage: false,
      label: upperCaseFirst(ModuleRegistrationName.PAYMENT),
      isRequired: false,
      isQueryable: true,
      dependencies: ["logger"],
      defaultModuleDeclaration: {
        scope: MODULE_SCOPE.INTERNAL,
        resources: MODULE_RESOURCE_TYPE.SHARED,
      },
    },
    [Modules.USER]: {
      key: Modules.USER,
      registrationName: ModuleRegistrationName.USER,
      defaultPackage: false,
      label: upperCaseFirst(ModuleRegistrationName.USER),
      isRequired: false,
      isQueryable: true,
      dependencies: [ModuleRegistrationName.EVENT_BUS, "logger"],
      defaultModuleDeclaration: {
        scope: MODULE_SCOPE.INTERNAL,
        resources: MODULE_RESOURCE_TYPE.SHARED,
      },
    },
    [Modules.REGION]: {
      key: Modules.REGION,
      registrationName: ModuleRegistrationName.REGION,
      defaultPackage: false,
      label: upperCaseFirst(ModuleRegistrationName.REGION),
      isRequired: false,
      isQueryable: true,
      dependencies: ["logger"],
      defaultModuleDeclaration: {
        scope: MODULE_SCOPE.INTERNAL,
        resources: MODULE_RESOURCE_TYPE.SHARED,
      },
    },
    [Modules.ORDER]: {
      key: Modules.ORDER,
      registrationName: ModuleRegistrationName.ORDER,
      defaultPackage: false,
      label: upperCaseFirst(ModuleRegistrationName.ORDER),
      isRequired: false,
      isQueryable: true,
      dependencies: ["logger", ModuleRegistrationName.EVENT_BUS],
      defaultModuleDeclaration: {
        scope: MODULE_SCOPE.INTERNAL,
        resources: MODULE_RESOURCE_TYPE.SHARED,
      },
    },
    [Modules.TAX]: {
      key: Modules.TAX,
      registrationName: ModuleRegistrationName.TAX,
      defaultPackage: false,
      label: upperCaseFirst(ModuleRegistrationName.TAX),
      isRequired: false,
      isQueryable: true,
      dependencies: ["logger", ModuleRegistrationName.EVENT_BUS],
      defaultModuleDeclaration: {
        scope: MODULE_SCOPE.INTERNAL,
        resources: MODULE_RESOURCE_TYPE.SHARED,
      },
    },
    [Modules.API_KEY]: {
      key: Modules.API_KEY,
      registrationName: ModuleRegistrationName.API_KEY,
      defaultPackage: false,
      label: upperCaseFirst(ModuleRegistrationName.API_KEY),
      isRequired: false,
      isQueryable: true,
      dependencies: ["logger"],
      defaultModuleDeclaration: {
        scope: MODULE_SCOPE.INTERNAL,
        resources: MODULE_RESOURCE_TYPE.SHARED,
      },
    },
    [Modules.STORE]: {
      key: Modules.STORE,
      registrationName: ModuleRegistrationName.STORE,
      defaultPackage: false,
      label: upperCaseFirst(ModuleRegistrationName.STORE),
      isRequired: false,
      isQueryable: true,
      dependencies: ["logger"],
      defaultModuleDeclaration: {
        scope: MODULE_SCOPE.INTERNAL,
        resources: MODULE_RESOURCE_TYPE.SHARED,
      },
    },
    [Modules.CURRENCY]: {
      key: Modules.CURRENCY,
      registrationName: ModuleRegistrationName.CURRENCY,
      defaultPackage: false,
      label: upperCaseFirst(ModuleRegistrationName.CURRENCY),
      isRequired: false,
      isQueryable: true,
      dependencies: ["logger"],
      defaultModuleDeclaration: {
        scope: MODULE_SCOPE.INTERNAL,
        resources: MODULE_RESOURCE_TYPE.SHARED,
      },
    },
    [Modules.FILE]: {
      key: Modules.FILE,
      registrationName: ModuleRegistrationName.FILE,
      defaultPackage: false,
      label: upperCaseFirst(ModuleRegistrationName.FILE),
      isRequired: false,
      isQueryable: true,
      dependencies: ["logger"],
      defaultModuleDeclaration: {
        scope: MODULE_SCOPE.INTERNAL,
        resources: MODULE_RESOURCE_TYPE.SHARED,
      },
    },
    [Modules.NOTIFICATION]: {
      key: Modules.NOTIFICATION,
      registrationName: ModuleRegistrationName.NOTIFICATION,
      defaultPackage: false,
      label: upperCaseFirst(ModuleRegistrationName.NOTIFICATION),
      isRequired: false,
      isQueryable: true,
      dependencies: ["logger"],
      defaultModuleDeclaration: {
        scope: MODULE_SCOPE.INTERNAL,
        resources: MODULE_RESOURCE_TYPE.SHARED,
      },
    },
  }

export const MODULE_DEFINITIONS: ModuleDefinition[] =
  Object.values(ModulesDefinition)

export default MODULE_DEFINITIONS