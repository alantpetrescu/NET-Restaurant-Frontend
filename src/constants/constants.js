export const serviceConstants = [
{
    id: 1,
    name: "Authorization",
    actions: [
    {
        id: 1,
        name: "Create User",
        method: "POST",
        url: "api/AuthController/createUser",
        bodyProperties: [["Password", "string"], ["Email", "string"], ["FirstName", "?string"], ["LastName", "?string"]],
        params: []
    },
    {
        id: 2,
        name: "Login",
        method: "POST",
        url: "api/AuthController/loginUser",
        bodyProperties: [["Password", "string"], ["Email", "string"], ["FirstName", "string?"], ["LastName", "string?"]],
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
        url: "api/RestaurantController/getRestaurants",
        bodyProperties: [],
        params: []
    },
    {
        id: 2,
        name: "Get Restaurant",
        method: "GET",
        url: "api/RestaurantController/getRestaurant",
        bodyProperties: [["restaurantId", "Guid"]],
        params: []
    },
    {
        id: 3,
        name: "Create",
        method: "POST",
        url: "api/RestaurantController/create",
        bodyProperties: [],
        params: [["Title", "string"]],
    },
    {
        id: 4,
        name: "Delete",
        method: "POST",
        url: "api/RestaurantController/delete",
        bodyProperties: [],
        params: [["RestaurantId", "Guid"]],
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
        url: "api/EmployeeController/getEmployees",
        bodyProperties: [],
        params: [],
    },
    {
        id: 2,
        name: "Get Employee By Id",
        method: "GET",
        url: "api/EmployeeController/getEmployee/id",
        bodyProperties: [["employeeId", "Guid"]],
        params: [],
    },
    {
        id: 3,
        name: "Get Employee By Email",
        method: "GET",
        url: "api/EmployeeController/getEmployee/email",
        bodyProperties: [["employeeEmail", "string"]],
        params: [],
    },
    {
        id: 4,
        name: "Create",
        method: "POST",
        url: "api/EmployeeController/create",
        bodyProperties: [],
        params: [["FirstName", "string"], ["LastName", "string"], ["Email", "string"], ["Age", "int"], ["Revenue", "int"], ["RestaurantId", "Guid"]],
    },
    {
        name: "Delete",
        method: "POST",
        url: "api/EmployeeController/delete",
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
        url: "api/ManagerController/getManagers",
        bodyProperties: [],
        params: [],
    },
    {

        id: 2,
        name: "Get Manager",
        method: "GET",
        url: "api/ManagerController/getManager",
        bodyProperties: [["managerId", "Guid"]],
        params: [],
    },
    {
        id: 3,
        name: "Create",
        method: "POST",
        url: "api/ManagerController/create",
        bodyProperties: [],
        params: [["FirstName", "string"], ["LastName", "string"], ["Email", "string"], ["Age", "int"], ["Revenue", "int"], ["RestaurantId", "Guid"]],
    },
    {
        id: 4,
        name: "Delete",
        method: "POST",
        url: "api/ManagerController/delete",
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
        url: "api/RecipeController/getRecipes",
        bodyProperties: [],
        params: [],
    },
    {
        id: 2,
        name: "Get Recipe",
        method: "GET",
        url: "api/RecipeController/getRecipe",
        bodyProperties: [["recipeId", "Guid"]],
        params: [],
    },
    {
        id: 3,
        name: "Create",
        method: "POST",
        url: "api/RecipeController/create",
        bodyProperties: [],
        params: [["Name", "string"]],
    },
    {
        id: 4,
        name: "Delete",
        method: "POST",
        url: "api/RecipeController/delete",
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
        url: "api/UserController/getUsers",
        bodyProperties: [],
        params: [],
    },
    {
        id: 2,
        name: "Get User",
        method: "GET",
        url: "api/UserController/getUser",
        bodyProperties: [["userId", "Guid"]],
        params: [],
    },
    {
        id: 3,
        name: "Create",
        method: "POST",
        url: "api/UserController/create",
        bodyProperties: [],
        params: [["Password", "string"], ["Email", "string"], ["FirstName", "string?"], ["LastName", "string?"]],
    },
    {
        id: 4,
        name: "Delete",
        method: "POST",
        url: "api/UserController/delete",
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