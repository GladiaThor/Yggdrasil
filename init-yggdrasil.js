let shardingConfig =  {
    "_id": "yggdrasil",
    "version": 1,
    "members": [
        {
            "_id": 1,
            "host": "asgard:27017",
            "priority": 3
        },
        {
            "_id": 2,
            "host": "midgard:27017",
            "priority": 2
        },
        {
            "_id": 3,
            "host": "niflhel:27017",
            "priority": 1
        }
    ]
}

rs.initiate(shardingConfig, {force: true});
rs.status();
