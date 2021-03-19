const generateRandomInt = maxInt => Math.floor(Math.random() * maxInt)

export default function ({ gameType, memberNum }) {
  console.log(gameType, memberNum)
  const recommendRoles = {
    1: [
      0,
      0,
      0,
      0,
      0,
      0,
      [
        {
          memberNum: 6,
          normalWolfNum: 2,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-yanjing',
              itemName: '预言家',
              isSelected: 1,
              roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
            },
            {
              id: 3,
              iconType: 'icon-dunpai',
              itemName: '守卫',
              isSelected: 0,
              roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
            },
            {
              id: 4,
              iconType: 'icon-mofayuyinxunlian',
              itemName: '女巫',
              isSelected: 0,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-demon-hunter',
              itemName: '猎人',
              isSelected: 1,
              roleInfo:
                '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
            },
            {
              id: 6,
              iconType: 'icon-baffled',
              itemName: '白痴',
              isSelected: 0,
              roleInfo:
                '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            },
            {
              id: 7,
              iconType: 'icon-qiubitezhijian',
              itemName: '丘比特',
              isSelected: 0,
              roleInfo:
                '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
            },
            {
              id: 8,
              iconType: 'icon-yincang',
              itemName: '隐狼',
              isSelected: 0,
              roleInfo:
                '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
            },
            {
              id: 9,
              iconType: 'icon-bingdu',
              itemName: '狼美人',
              isSelected: 0,
              roleInfo:
                '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
            },
            {
              id: 10,
              iconType: 'icon-lang2',
              itemName: '白狼王',
              isSelected: 0,
              roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
            },
          ],
        },
        {
          memberNum: 6,
          normalWolfNum: 2,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-yanjing',
              itemName: '预言家',
              isSelected: 0,
              roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
            },
            {
              id: 3,
              iconType: 'icon-dunpai',
              itemName: '守卫',
              isSelected: 0,
              roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
            },
            {
              id: 4,
              iconType: 'icon-mofayuyinxunlian',
              itemName: '女巫',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-demon-hunter',
              itemName: '猎人',
              isSelected: 0,
              roleInfo:
                '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
            },
            {
              id: 6,
              iconType: 'icon-baffled',
              itemName: '白痴',
              isSelected: 0,
              roleInfo:
                '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            },
            {
              id: 7,
              iconType: 'icon-qiubitezhijian',
              itemName: '丘比特',
              isSelected: 0,
              roleInfo:
                '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
            },
            {
              id: 8,
              iconType: 'icon-yincang',
              itemName: '隐狼',
              isSelected: 0,
              roleInfo:
                '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
            },
            {
              id: 9,
              iconType: 'icon-bingdu',
              itemName: '狼美人',
              isSelected: 0,
              roleInfo:
                '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
            },
            {
              id: 10,
              iconType: 'icon-lang2',
              itemName: '白狼王',
              isSelected: 0,
              roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
            },
          ],
        },
      ],
      [
        {
          memberNum: 7,
          normalWolfNum: 2,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-yanjing',
              itemName: '预言家',
              isSelected: 1,
              roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
            },
            {
              id: 3,
              iconType: 'icon-dunpai',
              itemName: '守卫',
              isSelected: 1,
              roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
            },
            {
              id: 4,
              iconType: 'icon-mofayuyinxunlian',
              itemName: '女巫',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-demon-hunter',
              itemName: '猎人',
              isSelected: 0,
              roleInfo:
                '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
            },
            {
              id: 6,
              iconType: 'icon-baffled',
              itemName: '白痴',
              isSelected: 0,
              roleInfo:
                '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            },
            {
              id: 7,
              iconType: 'icon-qiubitezhijian',
              itemName: '丘比特',
              isSelected: 0,
              roleInfo:
                '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
            },
            {
              id: 8,
              iconType: 'icon-yincang',
              itemName: '隐狼',
              isSelected: 0,
              roleInfo:
                '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
            },
            {
              id: 9,
              iconType: 'icon-bingdu',
              itemName: '狼美人',
              isSelected: 0,
              roleInfo:
                '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
            },
            {
              id: 10,
              iconType: 'icon-lang2',
              itemName: '白狼王',
              isSelected: 1,
              roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
            },
          ],
        },
      ],
      [
        {
          memberNum: 8,
          normalWolfNum: 3,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-yanjing',
              itemName: '预言家',
              isSelected: 1,
              roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
            },
            {
              id: 3,
              iconType: 'icon-dunpai',
              itemName: '守卫',
              isSelected: 0,
              roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
            },
            {
              id: 4,
              iconType: 'icon-mofayuyinxunlian',
              itemName: '女巫',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-demon-hunter',
              itemName: '猎人',
              isSelected: 1,
              roleInfo:
                '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
            },
            {
              id: 6,
              iconType: 'icon-baffled',
              itemName: '白痴',
              isSelected: 0,
              roleInfo:
                '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            },
            {
              id: 7,
              iconType: 'icon-qiubitezhijian',
              itemName: '丘比特',
              isSelected: 0,
              roleInfo:
                '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
            },
            {
              id: 8,
              iconType: 'icon-yincang',
              itemName: '隐狼',
              isSelected: 0,
              roleInfo:
                '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
            },
            {
              id: 9,
              iconType: 'icon-bingdu',
              itemName: '狼美人',
              isSelected: 0,
              roleInfo:
                '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
            },
            {
              id: 10,
              iconType: 'icon-lang2',
              itemName: '白狼王',
              isSelected: 0,
              roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
            },
          ],
        },
        {
          memberNum: 8,
          normalWolfNum: 3,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-yanjing',
              itemName: '预言家',
              isSelected: 1,
              roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
            },
            {
              id: 3,
              iconType: 'icon-dunpai',
              itemName: '守卫',
              isSelected: 1,
              roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
            },
            {
              id: 4,
              iconType: 'icon-mofayuyinxunlian',
              itemName: '女巫',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-demon-hunter',
              itemName: '猎人',
              isSelected: 0,
              roleInfo:
                '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
            },
            {
              id: 6,
              iconType: 'icon-baffled',
              itemName: '白痴',
              isSelected: 0,
              roleInfo:
                '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            },
            {
              id: 7,
              iconType: 'icon-qiubitezhijian',
              itemName: '丘比特',
              isSelected: 0,
              roleInfo:
                '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
            },
            {
              id: 8,
              iconType: 'icon-yincang',
              itemName: '隐狼',
              isSelected: 0,
              roleInfo:
                '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
            },
            {
              id: 9,
              iconType: 'icon-bingdu',
              itemName: '狼美人',
              isSelected: 0,
              roleInfo:
                '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
            },
            {
              id: 10,
              iconType: 'icon-lang2',
              itemName: '白狼王',
              isSelected: 0,
              roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
            },
          ],
        },
      ],
      [
        {
          memberNum: 9,
          normalWolfNum: 3,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-yanjing',
              itemName: '预言家',
              isSelected: 1,
              roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
            },
            {
              id: 3,
              iconType: 'icon-dunpai',
              itemName: '守卫',
              isSelected: 0,
              roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
            },
            {
              id: 4,
              iconType: 'icon-mofayuyinxunlian',
              itemName: '女巫',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-demon-hunter',
              itemName: '猎人',
              isSelected: 0,
              roleInfo:
                '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
            },
            {
              id: 6,
              iconType: 'icon-baffled',
              itemName: '白痴',
              isSelected: 0,
              roleInfo:
                '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            },
            {
              id: 7,
              iconType: 'icon-qiubitezhijian',
              itemName: '丘比特',
              isSelected: 1,
              roleInfo:
                '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
            },
            {
              id: 8,
              iconType: 'icon-yincang',
              itemName: '隐狼',
              isSelected: 0,
              roleInfo:
                '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
            },
            {
              id: 9,
              iconType: 'icon-bingdu',
              itemName: '狼美人',
              isSelected: 0,
              roleInfo:
                '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
            },
            {
              id: 10,
              iconType: 'icon-lang2',
              itemName: '白狼王',
              isSelected: 0,
              roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
            },
          ],
        },
        {
          memberNum: 9,
          normalWolfNum: 3,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-yanjing',
              itemName: '预言家',
              isSelected: 1,
              roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
            },
            {
              id: 3,
              iconType: 'icon-dunpai',
              itemName: '守卫',
              isSelected: 0,
              roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
            },
            {
              id: 4,
              iconType: 'icon-mofayuyinxunlian',
              itemName: '女巫',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-demon-hunter',
              itemName: '猎人',
              isSelected: 1,
              roleInfo:
                '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
            },
            {
              id: 6,
              iconType: 'icon-baffled',
              itemName: '白痴',
              isSelected: 0,
              roleInfo:
                '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            },
            {
              id: 7,
              iconType: 'icon-qiubitezhijian',
              itemName: '丘比特',
              isSelected: 0,
              roleInfo:
                '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
            },
            {
              id: 8,
              iconType: 'icon-yincang',
              itemName: '隐狼',
              isSelected: 0,
              roleInfo:
                '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
            },
            {
              id: 9,
              iconType: 'icon-bingdu',
              itemName: '狼美人',
              isSelected: 0,
              roleInfo:
                '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
            },
            {
              id: 10,
              iconType: 'icon-lang2',
              itemName: '白狼王',
              isSelected: 0,
              roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
            },
          ],
        },
      ],
      [
        {
          memberNum: 10,
          normalWolfNum: 3,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-yanjing',
              itemName: '预言家',
              isSelected: 1,
              roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
            },
            {
              id: 3,
              iconType: 'icon-dunpai',
              itemName: '守卫',
              isSelected: 0,
              roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
            },
            {
              id: 4,
              iconType: 'icon-mofayuyinxunlian',
              itemName: '女巫',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-demon-hunter',
              itemName: '猎人',
              isSelected: 1,
              roleInfo:
                '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
            },
            {
              id: 6,
              iconType: 'icon-baffled',
              itemName: '白痴',
              isSelected: 0,
              roleInfo:
                '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            },
            {
              id: 7,
              iconType: 'icon-qiubitezhijian',
              itemName: '丘比特',
              isSelected: 0,
              roleInfo:
                '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
            },
            {
              id: 8,
              iconType: 'icon-yincang',
              itemName: '隐狼',
              isSelected: 0,
              roleInfo:
                '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
            },
            {
              id: 9,
              iconType: 'icon-bingdu',
              itemName: '狼美人',
              isSelected: 0,
              roleInfo:
                '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
            },
            {
              id: 10,
              iconType: 'icon-lang2',
              itemName: '白狼王',
              isSelected: 0,
              roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
            },
          ],
        },
        {
          memberNum: 10,
          normalWolfNum: 3,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-yanjing',
              itemName: '预言家',
              isSelected: 1,
              roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
            },
            {
              id: 3,
              iconType: 'icon-dunpai',
              itemName: '守卫',
              isSelected: 0,
              roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
            },
            {
              id: 4,
              iconType: 'icon-mofayuyinxunlian',
              itemName: '女巫',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-demon-hunter',
              itemName: '猎人',
              isSelected: 1,
              roleInfo:
                '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
            },
            {
              id: 6,
              iconType: 'icon-baffled',
              itemName: '白痴',
              isSelected: 1,
              roleInfo:
                '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            },
            {
              id: 7,
              iconType: 'icon-qiubitezhijian',
              itemName: '丘比特',
              isSelected: 0,
              roleInfo:
                '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
            },
            {
              id: 8,
              iconType: 'icon-yincang',
              itemName: '隐狼',
              isSelected: 0,
              roleInfo:
                '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
            },
            {
              id: 9,
              iconType: 'icon-bingdu',
              itemName: '狼美人',
              isSelected: 0,
              roleInfo:
                '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
            },
            {
              id: 10,
              iconType: 'icon-lang2',
              itemName: '白狼王',
              isSelected: 0,
              roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
            },
          ],
        },
        {
          memberNum: 10,
          normalWolfNum: 3,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-yanjing',
              itemName: '预言家',
              isSelected: 1,
              roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
            },
            {
              id: 3,
              iconType: 'icon-dunpai',
              itemName: '守卫',
              isSelected: 0,
              roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
            },
            {
              id: 4,
              iconType: 'icon-mofayuyinxunlian',
              itemName: '女巫',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-demon-hunter',
              itemName: '猎人',
              isSelected: 0,
              roleInfo:
                '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
            },
            {
              id: 6,
              iconType: 'icon-baffled',
              itemName: '白痴',
              isSelected: 0,
              roleInfo:
                '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            },
            {
              id: 7,
              iconType: 'icon-qiubitezhijian',
              itemName: '丘比特',
              isSelected: 1,
              roleInfo:
                '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
            },
            {
              id: 8,
              iconType: 'icon-yincang',
              itemName: '隐狼',
              isSelected: 0,
              roleInfo:
                '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
            },
            {
              id: 9,
              iconType: 'icon-bingdu',
              itemName: '狼美人',
              isSelected: 0,
              roleInfo:
                '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
            },
            {
              id: 10,
              iconType: 'icon-lang2',
              itemName: '白狼王',
              isSelected: 0,
              roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
            },
          ],
        },
        {
          memberNum: 10,
          normalWolfNum: 3,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-yanjing',
              itemName: '预言家',
              isSelected: 1,
              roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
            },
            {
              id: 3,
              iconType: 'icon-dunpai',
              itemName: '守卫',
              isSelected: 0,
              roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
            },
            {
              id: 4,
              iconType: 'icon-mofayuyinxunlian',
              itemName: '女巫',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-demon-hunter',
              itemName: '猎人',
              isSelected: 1,
              roleInfo:
                '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
            },
            {
              id: 6,
              iconType: 'icon-baffled',
              itemName: '白痴',
              isSelected: 0,
              roleInfo:
                '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            },
            {
              id: 7,
              iconType: 'icon-qiubitezhijian',
              itemName: '丘比特',
              isSelected: 1,
              roleInfo:
                '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
            },
            {
              id: 8,
              iconType: 'icon-yincang',
              itemName: '隐狼',
              isSelected: 0,
              roleInfo:
                '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
            },
            {
              id: 9,
              iconType: 'icon-bingdu',
              itemName: '狼美人',
              isSelected: 0,
              roleInfo:
                '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
            },
            {
              id: 10,
              iconType: 'icon-lang2',
              itemName: '白狼王',
              isSelected: 0,
              roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
            },
          ],
        },
      ],
      [
        {
          memberNum: 11,
          normalWolfNum: 4,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-yanjing',
              itemName: '预言家',
              isSelected: 1,
              roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
            },
            {
              id: 3,
              iconType: 'icon-dunpai',
              itemName: '守卫',
              isSelected: 0,
              roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
            },
            {
              id: 4,
              iconType: 'icon-mofayuyinxunlian',
              itemName: '女巫',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-demon-hunter',
              itemName: '猎人',
              isSelected: 1,
              roleInfo:
                '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
            },
            {
              id: 6,
              iconType: 'icon-baffled',
              itemName: '白痴',
              isSelected: 1,
              roleInfo:
                '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            },
            {
              id: 7,
              iconType: 'icon-qiubitezhijian',
              itemName: '丘比特',
              isSelected: 0,
              roleInfo:
                '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
            },
            {
              id: 8,
              iconType: 'icon-yincang',
              itemName: '隐狼',
              isSelected: 0,
              roleInfo:
                '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
            },
            {
              id: 9,
              iconType: 'icon-bingdu',
              itemName: '狼美人',
              isSelected: 0,
              roleInfo:
                '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
            },
            {
              id: 10,
              iconType: 'icon-lang2',
              itemName: '白狼王',
              isSelected: 0,
              roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
            },
          ],
        },
        {
          memberNum: 11,
          normalWolfNum: 4,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-yanjing',
              itemName: '预言家',
              isSelected: 1,
              roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
            },
            {
              id: 3,
              iconType: 'icon-dunpai',
              itemName: '守卫',
              isSelected: 0,
              roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
            },
            {
              id: 4,
              iconType: 'icon-mofayuyinxunlian',
              itemName: '女巫',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-demon-hunter',
              itemName: '猎人',
              isSelected: 1,
              roleInfo:
                '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
            },
            {
              id: 6,
              iconType: 'icon-baffled',
              itemName: '白痴',
              isSelected: 0,
              roleInfo:
                '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            },
            {
              id: 7,
              iconType: 'icon-qiubitezhijian',
              itemName: '丘比特',
              isSelected: 1,
              roleInfo:
                '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
            },
            {
              id: 8,
              iconType: 'icon-yincang',
              itemName: '隐狼',
              isSelected: 0,
              roleInfo:
                '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
            },
            {
              id: 9,
              iconType: 'icon-bingdu',
              itemName: '狼美人',
              isSelected: 0,
              roleInfo:
                '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
            },
            {
              id: 10,
              iconType: 'icon-lang2',
              itemName: '白狼王',
              isSelected: 0,
              roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
            },
          ],
        },
      ],
      [
        {
          memberNum: 12,
          normalWolfNum: 4,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-yanjing',
              itemName: '预言家',
              isSelected: 1,
              roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
            },
            {
              id: 3,
              iconType: 'icon-dunpai',
              itemName: '守卫',
              isSelected: 0,
              roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
            },
            {
              id: 4,
              iconType: 'icon-mofayuyinxunlian',
              itemName: '女巫',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-demon-hunter',
              itemName: '猎人',
              isSelected: 1,
              roleInfo:
                '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
            },
            {
              id: 6,
              iconType: 'icon-baffled',
              itemName: '白痴',
              isSelected: 1,
              roleInfo:
                '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            },
            {
              id: 7,
              iconType: 'icon-qiubitezhijian',
              itemName: '丘比特',
              isSelected: 0,
              roleInfo:
                '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
            },
            {
              id: 8,
              iconType: 'icon-yincang',
              itemName: '隐狼',
              isSelected: 0,
              roleInfo:
                '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
            },
            {
              id: 9,
              iconType: 'icon-bingdu',
              itemName: '狼美人',
              isSelected: 0,
              roleInfo:
                '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
            },
            {
              id: 10,
              iconType: 'icon-lang2',
              itemName: '白狼王',
              isSelected: 0,
              roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
            },
          ],
        },
        {
          memberNum: 12,
          normalWolfNum: 3,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-yanjing',
              itemName: '预言家',
              isSelected: 1,
              roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
            },
            {
              id: 3,
              iconType: 'icon-dunpai',
              itemName: '守卫',
              isSelected: 1,
              roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
            },
            {
              id: 4,
              iconType: 'icon-mofayuyinxunlian',
              itemName: '女巫',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-demon-hunter',
              itemName: '猎人',
              isSelected: 1,
              roleInfo:
                '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
            },
            {
              id: 6,
              iconType: 'icon-baffled',
              itemName: '白痴',
              isSelected: 0,
              roleInfo:
                '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            },
            {
              id: 7,
              iconType: 'icon-qiubitezhijian',
              itemName: '丘比特',
              isSelected: 0,
              roleInfo:
                '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
            },
            {
              id: 8,
              iconType: 'icon-yincang',
              itemName: '隐狼',
              isSelected: 0,
              roleInfo:
                '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
            },
            {
              id: 9,
              iconType: 'icon-bingdu',
              itemName: '狼美人',
              isSelected: 0,
              roleInfo:
                '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
            },
            {
              id: 10,
              iconType: 'icon-lang2',
              itemName: '白狼王',
              isSelected: 1,
              roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
            },
          ],
        },
        {
          memberNum: 12,
          normalWolfNum: 3,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-yanjing',
              itemName: '预言家',
              isSelected: 1,
              roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
            },
            {
              id: 3,
              iconType: 'icon-dunpai',
              itemName: '守卫',
              isSelected: 1,
              roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
            },
            {
              id: 4,
              iconType: 'icon-mofayuyinxunlian',
              itemName: '女巫',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-demon-hunter',
              itemName: '猎人',
              isSelected: 1,
              roleInfo:
                '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
            },
            {
              id: 6,
              iconType: 'icon-baffled',
              itemName: '白痴',
              isSelected: 0,
              roleInfo:
                '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            },
            {
              id: 7,
              iconType: 'icon-qiubitezhijian',
              itemName: '丘比特',
              isSelected: 0,
              roleInfo:
                '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
            },
            {
              id: 8,
              iconType: 'icon-yincang',
              itemName: '隐狼',
              isSelected: 0,
              roleInfo:
                '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
            },
            {
              id: 9,
              iconType: 'icon-bingdu',
              itemName: '狼美人',
              isSelected: 1,
              roleInfo:
                '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
            },
            {
              id: 10,
              iconType: 'icon-lang2',
              itemName: '白狼王',
              isSelected: 0,
              roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
            },
          ],
        },
      ],
      [
        {
          memberNum: 13,
          normalWolfNum: 3,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-yanjing',
              itemName: '预言家',
              isSelected: 1,
              roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
            },
            {
              id: 3,
              iconType: 'icon-dunpai',
              itemName: '守卫',
              isSelected: 1,
              roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
            },
            {
              id: 4,
              iconType: 'icon-mofayuyinxunlian',
              itemName: '女巫',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-demon-hunter',
              itemName: '猎人',
              isSelected: 1,
              roleInfo:
                '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
            },
            {
              id: 6,
              iconType: 'icon-baffled',
              itemName: '白痴',
              isSelected: 0,
              roleInfo:
                '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            },
            {
              id: 7,
              iconType: 'icon-qiubitezhijian',
              itemName: '丘比特',
              isSelected: 1,
              roleInfo:
                '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
            },
            {
              id: 8,
              iconType: 'icon-yincang',
              itemName: '隐狼',
              isSelected: 0,
              roleInfo:
                '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
            },
            {
              id: 9,
              iconType: 'icon-bingdu',
              itemName: '狼美人',
              isSelected: 0,
              roleInfo:
                '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
            },
            {
              id: 10,
              iconType: 'icon-lang2',
              itemName: '白狼王',
              isSelected: 1,
              roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
            },
          ],
        },
      ],
      [
        {
          memberNum: 14,
          normalWolfNum: 4,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-yanjing',
              itemName: '预言家',
              isSelected: 1,
              roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
            },
            {
              id: 3,
              iconType: 'icon-dunpai',
              itemName: '守卫',
              isSelected: 1,
              roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
            },
            {
              id: 4,
              iconType: 'icon-mofayuyinxunlian',
              itemName: '女巫',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-demon-hunter',
              itemName: '猎人',
              isSelected: 1,
              roleInfo:
                '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
            },
            {
              id: 6,
              iconType: 'icon-baffled',
              itemName: '白痴',
              isSelected: 0,
              roleInfo:
                '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            },
            {
              id: 7,
              iconType: 'icon-qiubitezhijian',
              itemName: '丘比特',
              isSelected: 1,
              roleInfo:
                '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
            },
            {
              id: 8,
              iconType: 'icon-yincang',
              itemName: '隐狼',
              isSelected: 1,
              roleInfo:
                '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
            },
            {
              id: 9,
              iconType: 'icon-bingdu',
              itemName: '狼美人',
              isSelected: 0,
              roleInfo:
                '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
            },
            {
              id: 10,
              iconType: 'icon-lang2',
              itemName: '白狼王',
              isSelected: 0,
              roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
            },
          ],
        },
        {
          memberNum: 14,
          normalWolfNum: 4,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-yanjing',
              itemName: '预言家',
              isSelected: 1,
              roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
            },
            {
              id: 3,
              iconType: 'icon-dunpai',
              itemName: '守卫',
              isSelected: 1,
              roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
            },
            {
              id: 4,
              iconType: 'icon-mofayuyinxunlian',
              itemName: '女巫',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-demon-hunter',
              itemName: '猎人',
              isSelected: 1,
              roleInfo:
                '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
            },
            {
              id: 6,
              iconType: 'icon-baffled',
              itemName: '白痴',
              isSelected: 1,
              roleInfo:
                '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            },
            {
              id: 7,
              iconType: 'icon-qiubitezhijian',
              itemName: '丘比特',
              isSelected: 0,
              roleInfo:
                '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
            },
            {
              id: 8,
              iconType: 'icon-yincang',
              itemName: '隐狼',
              isSelected: 0,
              roleInfo:
                '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
            },
            {
              id: 9,
              iconType: 'icon-bingdu',
              itemName: '狼美人',
              isSelected: 0,
              roleInfo:
                '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
            },
            {
              id: 10,
              iconType: 'icon-lang2',
              itemName: '白狼王',
              isSelected: 1,
              roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
            },
          ],
        },
        {
          memberNum: 14,
          normalWolfNum: 3,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-yanjing',
              itemName: '预言家',
              isSelected: 1,
              roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
            },
            {
              id: 3,
              iconType: 'icon-dunpai',
              itemName: '守卫',
              isSelected: 1,
              roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
            },
            {
              id: 4,
              iconType: 'icon-mofayuyinxunlian',
              itemName: '女巫',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-demon-hunter',
              itemName: '猎人',
              isSelected: 1,
              roleInfo:
                '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
            },
            {
              id: 6,
              iconType: 'icon-baffled',
              itemName: '白痴',
              isSelected: 1,
              roleInfo:
                '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            },
            {
              id: 7,
              iconType: 'icon-qiubitezhijian',
              itemName: '丘比特',
              isSelected: 0,
              roleInfo:
                '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
            },
            {
              id: 8,
              iconType: 'icon-yincang',
              itemName: '隐狼',
              isSelected: 1,
              roleInfo:
                '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
            },
            {
              id: 9,
              iconType: 'icon-bingdu',
              itemName: '狼美人',
              isSelected: 1,
              roleInfo:
                '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
            },
            {
              id: 10,
              iconType: 'icon-lang2',
              itemName: '白狼王',
              isSelected: 0,
              roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
            },
          ],
        },
      ],
      [
        {
          memberNum: 15,
          normalWolfNum: 4,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-yanjing',
              itemName: '预言家',
              isSelected: 1,
              roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
            },
            {
              id: 3,
              iconType: 'icon-dunpai',
              itemName: '守卫',
              isSelected: 1,
              roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
            },
            {
              id: 4,
              iconType: 'icon-mofayuyinxunlian',
              itemName: '女巫',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-demon-hunter',
              itemName: '猎人',
              isSelected: 1,
              roleInfo:
                '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
            },
            {
              id: 6,
              iconType: 'icon-baffled',
              itemName: '白痴',
              isSelected: 0,
              roleInfo:
                '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            },
            {
              id: 7,
              iconType: 'icon-qiubitezhijian',
              itemName: '丘比特',
              isSelected: 1,
              roleInfo:
                '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
            },
            {
              id: 8,
              iconType: 'icon-yincang',
              itemName: '隐狼',
              isSelected: 1,
              roleInfo:
                '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
            },
            {
              id: 9,
              iconType: 'icon-bingdu',
              itemName: '狼美人',
              isSelected: 0,
              roleInfo:
                '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
            },
            {
              id: 10,
              iconType: 'icon-lang2',
              itemName: '白狼王',
              isSelected: 0,
              roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
            },
          ],
        },
        {
          memberNum: 15,
          normalWolfNum: 5,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-yanjing',
              itemName: '预言家',
              isSelected: 1,
              roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
            },
            {
              id: 3,
              iconType: 'icon-dunpai',
              itemName: '守卫',
              isSelected: 1,
              roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
            },
            {
              id: 4,
              iconType: 'icon-mofayuyinxunlian',
              itemName: '女巫',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-demon-hunter',
              itemName: '猎人',
              isSelected: 1,
              roleInfo:
                '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
            },
            {
              id: 6,
              iconType: 'icon-baffled',
              itemName: '白痴',
              isSelected: 1,
              roleInfo:
                '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            },
            {
              id: 7,
              iconType: 'icon-qiubitezhijian',
              itemName: '丘比特',
              isSelected: 0,
              roleInfo:
                '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
            },
            {
              id: 8,
              iconType: 'icon-yincang',
              itemName: '隐狼',
              isSelected: 0,
              roleInfo:
                '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
            },
            {
              id: 9,
              iconType: 'icon-bingdu',
              itemName: '狼美人',
              isSelected: 0,
              roleInfo:
                '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
            },
            {
              id: 10,
              iconType: 'icon-lang2',
              itemName: '白狼王',
              isSelected: 0,
              roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
            },
          ],
        },
        {
          memberNum: 15,
          normalWolfNum: 4,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-yanjing',
              itemName: '预言家',
              isSelected: 1,
              roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
            },
            {
              id: 3,
              iconType: 'icon-dunpai',
              itemName: '守卫',
              isSelected: 1,
              roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
            },
            {
              id: 4,
              iconType: 'icon-mofayuyinxunlian',
              itemName: '女巫',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-demon-hunter',
              itemName: '猎人',
              isSelected: 1,
              roleInfo:
                '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
            },
            {
              id: 6,
              iconType: 'icon-baffled',
              itemName: '白痴',
              isSelected: 1,
              roleInfo:
                '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            },
            {
              id: 7,
              iconType: 'icon-qiubitezhijian',
              itemName: '丘比特',
              isSelected: 0,
              roleInfo:
                '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
            },
            {
              id: 8,
              iconType: 'icon-yincang',
              itemName: '隐狼',
              isSelected: 0,
              roleInfo:
                '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
            },
            {
              id: 9,
              iconType: 'icon-bingdu',
              itemName: '狼美人',
              isSelected: 0,
              roleInfo:
                '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
            },
            {
              id: 10,
              iconType: 'icon-lang2',
              itemName: '白狼王',
              isSelected: 1,
              roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
            },
          ],
        },
        {
          memberNum: 15,
          normalWolfNum: 4,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-yanjing',
              itemName: '预言家',
              isSelected: 1,
              roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
            },
            {
              id: 3,
              iconType: 'icon-dunpai',
              itemName: '守卫',
              isSelected: 1,
              roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
            },
            {
              id: 4,
              iconType: 'icon-mofayuyinxunlian',
              itemName: '女巫',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-demon-hunter',
              itemName: '猎人',
              isSelected: 1,
              roleInfo:
                '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
            },
            {
              id: 6,
              iconType: 'icon-baffled',
              itemName: '白痴',
              isSelected: 1,
              roleInfo:
                '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            },
            {
              id: 7,
              iconType: 'icon-qiubitezhijian',
              itemName: '丘比特',
              isSelected: 0,
              roleInfo:
                '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
            },
            {
              id: 8,
              iconType: 'icon-yincang',
              itemName: '隐狼',
              isSelected: 1,
              roleInfo:
                '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
            },
            {
              id: 9,
              iconType: 'icon-bingdu',
              itemName: '狼美人',
              isSelected: 1,
              roleInfo:
                '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
            },
            {
              id: 10,
              iconType: 'icon-lang2',
              itemName: '白狼王',
              isSelected: 0,
              roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
            },
          ],
        },
      ],
      [
        {
          memberNum: 16,
          normalWolfNum: 4,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-yanjing',
              itemName: '预言家',
              isSelected: 1,
              roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
            },
            {
              id: 3,
              iconType: 'icon-dunpai',
              itemName: '守卫',
              isSelected: 1,
              roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
            },
            {
              id: 4,
              iconType: 'icon-mofayuyinxunlian',
              itemName: '女巫',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-demon-hunter',
              itemName: '猎人',
              isSelected: 1,
              roleInfo:
                '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
            },
            {
              id: 6,
              iconType: 'icon-baffled',
              itemName: '白痴',
              isSelected: 1,
              roleInfo:
                '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            },
            {
              id: 7,
              iconType: 'icon-qiubitezhijian',
              itemName: '丘比特',
              isSelected: 0,
              roleInfo:
                '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
            },
            {
              id: 8,
              iconType: 'icon-yincang',
              itemName: '隐狼',
              isSelected: 1,
              roleInfo:
                '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
            },
            {
              id: 9,
              iconType: 'icon-bingdu',
              itemName: '狼美人',
              isSelected: 0,
              roleInfo:
                '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
            },
            {
              id: 10,
              iconType: 'icon-lang2',
              itemName: '白狼王',
              isSelected: 1,
              roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
            },
          ],
        },
      ],
      [
        {
          memberNum: 17,
          normalWolfNum: 4,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-yanjing',
              itemName: '预言家',
              isSelected: 1,
              roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
            },
            {
              id: 3,
              iconType: 'icon-dunpai',
              itemName: '守卫',
              isSelected: 1,
              roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
            },
            {
              id: 4,
              iconType: 'icon-mofayuyinxunlian',
              itemName: '女巫',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-demon-hunter',
              itemName: '猎人',
              isSelected: 1,
              roleInfo:
                '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
            },
            {
              id: 6,
              iconType: 'icon-baffled',
              itemName: '白痴',
              isSelected: 1,
              roleInfo:
                '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            },
            {
              id: 7,
              iconType: 'icon-qiubitezhijian',
              itemName: '丘比特',
              isSelected: 0,
              roleInfo:
                '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
            },
            {
              id: 8,
              iconType: 'icon-yincang',
              itemName: '隐狼',
              isSelected: 1,
              roleInfo:
                '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
            },
            {
              id: 9,
              iconType: 'icon-bingdu',
              itemName: '狼美人',
              isSelected: 0,
              roleInfo:
                '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
            },
            {
              id: 10,
              iconType: 'icon-lang2',
              itemName: '白狼王',
              isSelected: 1,
              roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
            },
          ],
        },
      ],
      [
        {
          memberNum: 18,
          normalWolfNum: 4,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-yanjing',
              itemName: '预言家',
              isSelected: 1,
              roleInfo: '预言家：每天晚上可以查看一位玩家的身份是好人还是狼人。',
            },
            {
              id: 3,
              iconType: 'icon-dunpai',
              itemName: '守卫',
              isSelected: 1,
              roleInfo: '守卫：每晚可以守护一个人，但不能连续2晚守护同一个人。被守卫守护的人当晚不会被狼人杀害。',
            },
            {
              id: 4,
              iconType: 'icon-mofayuyinxunlian',
              itemName: '女巫',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-demon-hunter',
              itemName: '猎人',
              isSelected: 1,
              roleInfo:
                '猎人：在被票死或狼人刀死时可以开枪带走一名玩家，但被女巫毒死或殉情而死不可开枪。每晚法官会告诉你技能是否还在。',
            },
            {
              id: 6,
              iconType: 'icon-baffled',
              itemName: '白痴',
              isSelected: 1,
              roleInfo:
                '白痴：白痴若是被投票出局，可以翻开自己的身份牌，免疫此次放逐，之后可以正常发言，但不能投票，狼人仍需要再杀他一次才能让他出局。但若是白痴因非投票原因死亡，则无法发动技能，立即死亡。',
            },
            {
              id: 7,
              iconType: 'icon-qiubitezhijian',
              itemName: '丘比特',
              isSelected: 1,
              roleInfo:
                '丘比特：丘比特在第一天晚上可以把两个人设为情侣，这两人若是其中一人死去，另一个也要跟着殉情。第一天晚上情侣睁眼互相确认，而丘比特无法得知情侣的身份。',
            },
            {
              id: 8,
              iconType: 'icon-yincang',
              itemName: '隐狼',
              isSelected: 1,
              roleInfo:
                '隐狼：夜间无法与队友共同刀人及讨论战术。狼人不认识隐狼，而隐狼可以知道哪些人是狼人，但不知道具体是什么狼。当狼队友全部出局时隐狼失败。',
            },
            {
              id: 9,
              iconType: 'icon-bingdu',
              itemName: '狼美人',
              isSelected: 1,
              roleInfo:
                '狼美人：狼美人是狼人阵营，在夜里可以魅惑一人，天亮后，如果狼美人被放逐出局或者被猎人射杀，被魅惑的玩家跟随狼美人一起出局，且无技能。（被魅惑的玩家不知情）',
            },
            {
              id: 10,
              iconType: 'icon-lang2',
              itemName: '白狼王',
              isSelected: 1,
              roleInfo: '白狼王：可以在白天自爆选择带走一名玩家。非自爆出局不得发动技能。',
            },
          ],
        },
      ],
    ],
    2: [
      0,
      0,
      0,
      0,
      0,
      [
        {
          memberNum: 5,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-huangguan1',
              itemName: '梅林',
              isSelected: 1,
              roleInfo: '梅林：知道除了莫德雷德以外的坏人牌。',
            },
            {
              id: 3,
              iconType: 'icon-yanjing',
              itemName: '派西维尔',
              isSelected: 1,
              roleInfo: '派西维尔：知道梅林和莫甘娜，但不知道分别是谁。',
            },
            {
              id: 4,
              iconType: 'icon-huangguan',
              itemName: '莫甘娜',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-dao',
              itemName: '刺客',
              isSelected: 1,
              roleInfo: '刺客：在好人阵型3次任务成功后，独自决定，挑选一名可能是梅林的玩家刺杀，如选中，坏人胜利。',
            },
            {
              id: 6,
              iconType: 'icon-ic_peiwan',
              itemName: '奥伯伦',
              isSelected: 0,
              roleInfo: '奥伯伦：看不到其他坏人，其他坏人也看不到他（被孤立）。',
            },
            {
              id: 7,
              iconType: 'icon-yincang',
              itemName: '莫德雷德',
              isSelected: 0,
              roleInfo: '莫德雷德：无法被梅林看到的坏人。',
            },
            {
              id: 8,
              iconType: 'icon-314wushuju-youling',
              itemName: '爪牙',
              isSelected: 0,
              roleInfo: '爪牙：无特殊能力的坏人。',
            },
          ],
        },
      ],
      [
        {
          memberNum: 6,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-huangguan1',
              itemName: '梅林',
              isSelected: 1,
              roleInfo: '梅林：知道除了莫德雷德以外的坏人牌。',
            },
            {
              id: 3,
              iconType: 'icon-yanjing',
              itemName: '派西维尔',
              isSelected: 1,
              roleInfo: '派西维尔：知道梅林和莫甘娜，但不知道分别是谁。',
            },
            {
              id: 4,
              iconType: 'icon-huangguan',
              itemName: '莫甘娜',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-dao',
              itemName: '刺客',
              isSelected: 1,
              roleInfo: '刺客：在好人阵型3次任务成功后，独自决定，挑选一名可能是梅林的玩家刺杀，如选中，坏人胜利。',
            },
            {
              id: 6,
              iconType: 'icon-ic_peiwan',
              itemName: '奥伯伦',
              isSelected: 0,
              roleInfo: '奥伯伦：看不到其他坏人，其他坏人也看不到他（被孤立）。',
            },
            {
              id: 7,
              iconType: 'icon-yincang',
              itemName: '莫德雷德',
              isSelected: 0,
              roleInfo: '莫德雷德：无法被梅林看到的坏人。',
            },
            {
              id: 8,
              iconType: 'icon-314wushuju-youling',
              itemName: '爪牙',
              isSelected: 0,
              roleInfo: '爪牙：无特殊能力的坏人。',
            },
          ],
        },
      ],
      [
        {
          memberNum: 7,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-huangguan1',
              itemName: '梅林',
              isSelected: 1,
              roleInfo: '梅林：知道除了莫德雷德以外的坏人牌。',
            },
            {
              id: 3,
              iconType: 'icon-yanjing',
              itemName: '派西维尔',
              isSelected: 1,
              roleInfo: '派西维尔：知道梅林和莫甘娜，但不知道分别是谁。',
            },
            {
              id: 4,
              iconType: 'icon-huangguan',
              itemName: '莫甘娜',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-dao',
              itemName: '刺客',
              isSelected: 1,
              roleInfo: '刺客：在好人阵型3次任务成功后，独自决定，挑选一名可能是梅林的玩家刺杀，如选中，坏人胜利。',
            },
            {
              id: 6,
              iconType: 'icon-ic_peiwan',
              itemName: '奥伯伦',
              isSelected: 1,
              roleInfo: '奥伯伦：看不到其他坏人，其他坏人也看不到他（被孤立）。',
            },
            {
              id: 7,
              iconType: 'icon-yincang',
              itemName: '莫德雷德',
              isSelected: 0,
              roleInfo: '莫德雷德：无法被梅林看到的坏人。',
            },
            {
              id: 8,
              iconType: 'icon-314wushuju-youling',
              itemName: '爪牙',
              isSelected: 0,
              roleInfo: '爪牙：无特殊能力的坏人。',
            },
          ],
        },
      ],
      [
        {
          memberNum: 8,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-huangguan1',
              itemName: '梅林',
              isSelected: 1,
              roleInfo: '梅林：知道除了莫德雷德以外的坏人牌。',
            },
            {
              id: 3,
              iconType: 'icon-yanjing',
              itemName: '派西维尔',
              isSelected: 1,
              roleInfo: '派西维尔：知道梅林和莫甘娜，但不知道分别是谁。',
            },
            {
              id: 4,
              iconType: 'icon-huangguan',
              itemName: '莫甘娜',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-dao',
              itemName: '刺客',
              isSelected: 1,
              roleInfo: '刺客：在好人阵型3次任务成功后，独自决定，挑选一名可能是梅林的玩家刺杀，如选中，坏人胜利。',
            },
            {
              id: 6,
              iconType: 'icon-ic_peiwan',
              itemName: '奥伯伦',
              isSelected: 0,
              roleInfo: '奥伯伦：看不到其他坏人，其他坏人也看不到他（被孤立）。',
            },
            {
              id: 7,
              iconType: 'icon-yincang',
              itemName: '莫德雷德',
              isSelected: 0,
              roleInfo: '莫德雷德：无法被梅林看到的坏人。',
            },
            {
              id: 8,
              iconType: 'icon-314wushuju-youling',
              itemName: '爪牙',
              isSelected: 1,
              roleInfo: '爪牙：无特殊能力的坏人。',
            },
          ],
        },
      ],
      [
        {
          memberNum: 9,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-huangguan1',
              itemName: '梅林',
              isSelected: 1,
              roleInfo: '梅林：知道除了莫德雷德以外的坏人牌。',
            },
            {
              id: 3,
              iconType: 'icon-yanjing',
              itemName: '派西维尔',
              isSelected: 1,
              roleInfo: '派西维尔：知道梅林和莫甘娜，但不知道分别是谁。',
            },
            {
              id: 4,
              iconType: 'icon-huangguan',
              itemName: '莫甘娜',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-dao',
              itemName: '刺客',
              isSelected: 1,
              roleInfo: '刺客：在好人阵型3次任务成功后，独自决定，挑选一名可能是梅林的玩家刺杀，如选中，坏人胜利。',
            },
            {
              id: 6,
              iconType: 'icon-ic_peiwan',
              itemName: '奥伯伦',
              isSelected: 0,
              roleInfo: '奥伯伦：看不到其他坏人，其他坏人也看不到他（被孤立）。',
            },
            {
              id: 7,
              iconType: 'icon-yincang',
              itemName: '莫德雷德',
              isSelected: 1,
              roleInfo: '莫德雷德：无法被梅林看到的坏人。',
            },
            {
              id: 8,
              iconType: 'icon-314wushuju-youling',
              itemName: '爪牙',
              isSelected: 0,
              roleInfo: '爪牙：无特殊能力的坏人。',
            },
          ],
        },
      ],
      [
        {
          memberNum: 10,
          specialCharacter: [
            {
              id: 2,
              iconType: 'icon-huangguan1',
              itemName: '梅林',
              isSelected: 1,
              roleInfo: '梅林：知道除了莫德雷德以外的坏人牌。',
            },
            {
              id: 3,
              iconType: 'icon-yanjing',
              itemName: '派西维尔',
              isSelected: 1,
              roleInfo: '派西维尔：知道梅林和莫甘娜，但不知道分别是谁。',
            },
            {
              id: 4,
              iconType: 'icon-huangguan',
              itemName: '莫甘娜',
              isSelected: 1,
              roleInfo:
                '女巫：女巫拥有两瓶药，解药可以救活一名当晚被狼人杀害的玩家，毒药可以毒杀一名玩家，女巫在每天晚上最多使用一瓶药。',
            },
            {
              id: 5,
              iconType: 'icon-dao',
              itemName: '刺客',
              isSelected: 1,
              roleInfo: '刺客：在好人阵型3次任务成功后，独自决定，挑选一名可能是梅林的玩家刺杀，如选中，坏人胜利。',
            },
            {
              id: 6,
              iconType: 'icon-ic_peiwan',
              itemName: '奥伯伦',
              isSelected: 1,
              roleInfo: '奥伯伦：看不到其他坏人，其他坏人也看不到他（被孤立）。',
            },
            {
              id: 7,
              iconType: 'icon-yincang',
              itemName: '莫德雷德',
              isSelected: 1,
              roleInfo: '莫德雷德：无法被梅林看到的坏人。',
            },
            {
              id: 8,
              iconType: 'icon-314wushuju-youling',
              itemName: '爪牙',
              isSelected: 0,
              roleInfo: '爪牙：无特殊能力的坏人。',
            },
          ],
        },
      ],
    ],
  }

  const len = recommendRoles[gameType][memberNum].length

  return recommendRoles[gameType][memberNum][generateRandomInt(len)]
}
