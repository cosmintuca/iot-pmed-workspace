function IotAdapter(server) {
    console.log("IotAdapter called")
    require('./strategies/IotAdapter');

    const DynavisionPlatform = require('./platform/dynavision');

    
    const CreateDsu = require('./dsu/create');
    const CreateDsuResource = require('./dsu/resource/create');
    const SearchDsuResources = require('./dsu/resource/search');
    const UpdateDsuResource = require('./dsu/resource/update');
    const DeleteDsuResource = require('./dsu/resource/delete');
    const GetDsuResourceById = require('./dsu/resource/getById');

    const CreateResource = require('./resource/create');
    const SearchResources = require('./resource/search');
    const UpdateResource = require('./resource/update');
    const DeleteResource = require('./resource/delete');
    const GetResourceById = require('./resource/getById');
    // const DeleteObservationById = require('./observation/deleteById');



    const { responseModifierMiddleware, requestBodyJSONMiddleware } = require('../privatesky/modules/apihub/utils/middlewares');
    const { requestBodyXMLMiddleware } = require('./utils/middlewares');

    server.use(`/iotAdapter/*`, responseModifierMiddleware);

    server.get(`/iotAdapter/resource/:resource_type`, SearchResources);
    // server.get(`/iotAdapter/Resource/:id`, requestBodyJSONMiddleware);
    server.get(`/iotAdapter/resource/:resource_type/:id`, GetResourceById);
    // server.delete(`/iotAdapter/Resource/:id`, DeleteResourceById);
    server.post(`/iotAdapter/resource/:resource_type`, requestBodyJSONMiddleware);
    server.post(`/iotAdapter/resource/:resource_type`, CreateResource);
    server.put(`/iotAdapter/resource/:resource_type/:id`, requestBodyJSONMiddleware);
    server.put(`/iotAdapter/resource/:resource_type/:id`, UpdateResource);
    server.delete(`/iotAdapter/resource/:resource_type/:id`, DeleteResource);

    server.post(`/iotAdapter/platform/dynavision`, requestBodyXMLMiddleware);
    server.post(`/iotAdapter/platform/dynavision`, DynavisionPlatform);

    server.post(`/iotAdapter/dsu`, CreateDsu);
    server.post(`/iotAdapter/dsu/resource/:resource_type`, requestBodyJSONMiddleware);
    server.post(`/iotAdapter/dsu/resource/:resource_type`, CreateDsuResource);
    server.get(`/iotAdapter/dsu/resource/:resource_type`, SearchDsuResources);
    server.put(`/iotAdapter/dsu/resource/:resource_type/:id`, requestBodyJSONMiddleware);
    server.put(`/iotAdapter/dsu/resource/:resource_type/:id`, UpdateDsuResource);
    server.delete(`/iotAdapter/dsu/resource/:resource_type/:id`, DeleteDsuResource);
    server.get(`/iotAdapter/dsu/resource/:resource_type/:id`, GetDsuResourceById);


}

module.exports = IotAdapter;
