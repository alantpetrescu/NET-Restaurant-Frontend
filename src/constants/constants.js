export const serviceConstants = [
{
    id: 1,
    name: "Authorization",
    actions: [
    {
        id: 1,
        name: "Create User",
        method: "POST",
        url: "api/Auth/createUser",
        bodyProperties: [["password", "string"], ["email", "string"], ["firstName", "string?"], ["lastName", "string?"]],
        params: []
    },
    {
        id: 2,
        name: "Login",
        method: "POST",
        url: "api/Auth/loginUser",
        bodyProperties: [["password", "string"], ["email", "string"], ["firstName", "string?"], ["lastName", "string?"]],
        params: []
    }
    ],
},
{
    id: 2,
    name: "Restaurant",
    actions: [
    {
        id: 1,
        name: "Get Restaurants",
        method: "GET",
        url: "api/Restaurant/getRestaurants",
        bodyProperties: [],
        params: []
    },
    {
        id: 2,
        name: "Get Restaurant",
        method: "GET",
        url: "api/Restaurant/getRestaurant",
        bodyProperties: [["restaurantId", "Guid"]],
        params: []
    },
    {
        id: 3,
        name: "Create",
        method: "POST",
        url: "api/Restaurant/create",
        bodyProperties: [],
        params: [["title", "string"]],
    },
    {
        id: 4,
        name: "Delete",
        method: "POST",
        url: "api/Restaurant/delete",
        bodyProperties: [],
        params: [["restaurantId", "Guid"]],
    }
    ],
}, 
{
    id: 3,
    name: "Employee",
    actions: [
    {
        id: 1,
        name: "Get Employees",
        method: "GET",
        url: "api/Employee/getEmployees",
        bodyProperties: [],
        params: [],
    },
    {
        id: 2,
        name: "Get Employee By Id",
        method: "GET",
        url: "api/Employee/getEmployee/id",
        bodyProperties: [["employeeId", "Guid"]],
        params: [],
    },
    {
        id: 3,
        name: "Get Employee By Email",
        method: "GET",
        url: "api/Employee/getEmployee/email",
        bodyProperties: [["employeeEmail", "string"]],
        params: [],
    },
    {
        id: 4,
        name: "Create",
        method: "POST",
        url: "api/Employee/create",
        bodyProperties: [],
        params: [
            ["firstName", "string"],
            ["lastName", "string"], 
            ["email", "string"], 
            ["age", "int"], 
            ["revenue", "int"], 
            ["restaurantId", "Guid"]
        ],
    },
    {
        name: "Delete",
        method: "POST",
        url: "api/Employee/delete",
        bodyProperties: [["employeeId", "Guid"]],
        params: []
    }
    ],
}, 
{
    id: 4,
    name: "Manager",
    actions: [
    {
        id: 1,
        name: "Get Managers",
        method: "GET",
        url: "api/Manager/getManagers",
        bodyProperties: [],
        params: [],
    },
    {

        id: 2,
        name: "Get Manager",
        method: "GET",
        url: "api/Manager/getManager",
        bodyProperties: [["managerId", "Guid"]],
        params: [],
    },
    {
        id: 3,
        name: "Create",
        method: "POST",
        url: "api/Manager/create",
        bodyProperties: [],
        params: [
            ["firstName", "string"],
            ["lastName", "string"],
            ["email", "string"],
            ["age", "int"],
            ["revenue", "int"],
            ["restaurantId", "Guid"]],
    },
    {
        id: 4,
        name: "Delete",
        method: "POST",
        url: "api/Manager/delete",
        bodyProperties: [["managerId", "Guid"]],
        params: [],
    }
    ],
},
{
    id: 5,
    name: "Recipe",
    actions: [
    {
        id: 1,
        name: "Get Recipes",
        method: "GET",
        url: "api/Recipe/getRecipes",
        bodyProperties: [],
        params: [],
    },
    {
        id: 2,
        name: "Get Recipe",
        method: "GET",
        url: "api/Recipe/getRecipe",
        bodyProperties: [["recipeId", "Guid"]],
        params: [],
    },
    {
        id: 3,
        name: "Create",
        method: "POST",
        url: "api/Recipe/create",
        bodyProperties: [],
        params: [["name", "string"]],
    },
    {
        id: 4,
        name: "Delete",
        method: "POST",
        url: "api/Recipe/delete",
        bodyProperties: [["recipeId", "Guid"]],
        params: [],
    }
    ],
},
{
    id: 6,
    name: "User",
    actions: [
    {
        id: 1,
        name: "Get Users",
        method: "GET",
        url: "api/User/getUsers",
        bodyProperties: [],
        params: [],
    },
    {
        id: 2,
        name: "Get User",
        method: "GET",
        url: "api/User/getUser",
        bodyProperties: [["userId", "Guid"]],
        params: [],
    },
    {
        id: 3,
        name: "Create",
        method: "POST",
        url: "api/User/create",
        bodyProperties: [],
        params: [
            ["password", "string"], 
            ["email", "string"],
            ["firstName", "string?"], 
            ["lastName", "string?"]],
    },
    {
        id: 4,
        name: "Delete",
        method: "POST",
        url: "api/User/delete",
        bodyProperties: [["userId", "Guid"]],
        params: [],
    }
    ],
  }
]

export const columnsExample = [
    {
        id: 1,
        name: "Column1"
    },
    {
        id: 2,
        name: "Column2"
    },
    {
        id: 3,
        name: "Column3"
    },
    {
        id: 4,
        name: "Column4"
    },
    {
        id: 5,
        name: "Column5"
    },
    {
        id: 6,
        name: "Column6"
    },
]

export const rowsExample = [
    {
        id: 1,
        data: [
            {
                id: 1,
                data: "data1"
            },
            {
                id: 2,
                data: "data2"
            },
            {
                id: 3,
                data: "data3"
            },
            {
                id: 4,
                data: "data4"
            },
            {
                id: 5,
                data: "data5"
            },
            {
                id: 6,
                data: "data6"
            }
        ]
    },
    {
        id: 2,
        data: [
            {
                id: 1,
                data: "data1"
            },
            {
                id: 2,
                data: "data2"
            },
            {
                id: 3,
                data: "data3"
            },
            {
                id: 4,
                data: "data4"
            },
            {
                id: 5,
                data: "data5"
            },
            {
                id: 6,
                data: "data6"
            }
        ]
    },
    {
        id: 3,
        data: [
            {
                id: 1,
                data: "data1"
            },
            {
                id: 2,
                data: "data2"
            },
            {
                id: 3,
                data: "data3"
            },
            {
                id: 4,
                data: "data4"
            },
            {
                id: 5,
                data: "data5"
            },
            {
                id: 6,
                data: "data6"
            }
        ]
    },
    {
        id: 4,
        data: [
            {
                id: 1,
                data: "data1"
            },
            {
                id: 2,
                data: "data2"
            },
            {
                id: 3,
                data: "data3"
            },
            {
                id: 4,
                data: "data4"
            },
            {
                id: 5,
                data: "data5"
            },
            {
                id: 6,
                data: "data6"
            }
        ]
    },
    {
        id: 5,
        data: [
            {
                id: 1,
                data: "data1"
            },
            {
                id: 2,
                data: "data2"
            },
            {
                id: 3,
                data: "data3"
            },
            {
                id: 4,
                data: "data4"
            },
            {
                id: 5,
                data: "data5"
            },
            {
                id: 6,
                data: "data6"
            }
        ]
    },
];

export const inputsExample = [
    {
        id: 1,
        data: {
            name: "input1",
            type: "text",
            placeholder: "placeholder1"
        }
    },
    {
        id: 2,
        data: {
            name: "input2",
            type: "text",
            placeholder: "placeholder2"
        }
    },
    {
        id: 3,
        data: {
            name: "input3",
            type: "text",
            placeholder: "placeholder3"
        }
    },
    {
        id: 4,
        data: {
            name: "input4",
            type: "text",
            placeholder: "placeholder4"
        }
    },
]