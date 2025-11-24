export const API = {
  GET_LOGIN: "/api/Login/login",
  LOGOUT: "/api/auth/logout",
  GET_USER_PROFILE: "/v1.0/me",
  GET_USER_INFO: "/api/Login/LoginUserDetail",
  GET_ROLE: "/api/Role/getRoles",

  /*Ceo Project */
  Get_PROJECTTYPE_SECTOR: "/api/Project/getProjectTypesAndProjectSectors",
  CREATE_CEO_PROJECT: "/api/Project/upsertProject",
  CREATE_PROJECT_BUDGET: "/api/Project/upsertProjectBudget",
  CREATE_PROJECT_TEAM: "/api/Project/upsertProjectTeam",
  CREATE_FINACIAL_APPROVAL: "/api/Project/upsertPermissionFinanceApproval",
  CREATE_PROJECT_MILESTONE: "/api/Project/upsertProjectMilestones",
  GET_PROJECT_DETAILS_BY_ID: "/api/Project/getProjectDetails",
  GET_ALL_PROJECT_FILTER: "/api/Project/get-projects-by-status",
  GET_TICKET_BY_ID: "/api/Ticket/get-ticket-by-id",
  GET_TICKET_LABELS: "/api/Login/labels-with-tickets",
  CREATE_NEW_TICKET_TASK: "/api/Ticket/create-custom-ticket",
  UPDATE_PROJECT_APPROVAL: "/api/Ticket/update-ticket-by-id",
  UPSERTRISK_UPLOAD: "/api/Project/upsertRisk",
  //department //
  GET_DEPARTMENTS: "/api/Department/get-department",
  GET_DEPARTMENTS_BY_ID: "/api/Login/getEmployeesByDepartment/",
  /*PM FLOW  */
  GET_PROJECT_DETAILS: "/api/Project/getProjectDetails",

  /* Employee data */
  GET_EMPLOYEES_BY_ROLES: "/api/Login/getEmployeesByRoles",
  GET_VENDORS_AND_SUBCONTRACTORS: "/api/Login/getVendorsAndSubcontractors",

  //Notification
  CREATE_NOTIFICATION: "/api/Notification/create-notification",
  GET_NOTIFICATION: "/api/Notification/get-notification",
  //Ticket Comment Create
  CREATE_TICKET_DETAILS: "/api/Ticket/add-comment-attachment",

  /** KANBAN */
  GET_ALL_BOARD: "/api/BoardManagement/boards",
  GET_BOARD_BY_ID: "/api/BoardManagement/boards",
  CREATE_BOARD: "/api/BoardManagement/add",
  UPDATE_BOARD: "/api/BoardManagement/update",
  DELETE_BOARD: "/api/BoardManagement/delete",
  CREATE_BOARD_STATUS: "/api/BoardStatus/add",
  UPDATE_BOARD_STATUS: "/api/BoardStatus/update",
  DELETE_BOARD_STATUS: "/api/BoardStatus/delete",
  BOARD_STATUS_MOVEMENT: "/api/BoardStatus/getboardstatusmovement",
  GET_TICKET_BY_BOARD_LABEL: "/api/BoardManagement/ticketsbyboardlabel",
  GET_FILTERED_BOARD_DATA: "/api/BoardManagement/boardfilter",
  GET_FILTERED_UPDATE_BOARD_DATA: "/api/UpdatesBoardList/boardfilter",
  /** GET BOQ ITEMS BY ID */
  GET_BOQ_ITEMS_BY_ID: "/api/Project/boq-items",
  // LOGIN BOARD DETAILS
  LOGIN_BOARD_DETAILS: "/api/Login/board-details",
  /** GET PURCHASE ORDER DETAILS */
  GET_PURCHASE_ORDER_DETAILS: "/api/Vendor/Getpurchase-order-details",
  GET_BOQCODE: "/api/Project/getBoqDetailsBy-BOQCode",

  //** BOQ Get DATA ***/
  GET_BOQ_DETAILS: "/api/Project/getBoqDetails",

  /** MASTER */
  GET_USER_DEPARTMENT: "/api/DepartmentManagement/userdepartments",
  GET_DEPARTMENT: "/api/DepartmentManagement/departments",
  ADD_DEPARTMENT: "/api/DepartmentManagement/add",
  UPDATE_DEPARTMENT: "/api/DepartmentManagement/update",
  DELETE_DEPARTMENT: "/api/DepartmentManagement/delete",
  ADD_BOARD: "/api/BoardManagement/addboardwithlabel",
  GET_BOARD: "/api/BoardManagement/boardlist",
  EDIT_BOARD: "/api/BoardManagement/updateboardwithlabel",
  GET_DESIGNATION: "/api/Designation/designations",
  GET_ROLES: "/api/Role/roles",
  GET_SHIFT: "/api/Shift/shifts",
  GET_LABELS: "/api/Label/labels",
  ADD_LABEL: "/api/Label/add",
  UPDATE_LABEL: "/api/Label/update",

  /*** MilestoneMaster **/
  GET_MILESTONE_MASTER_LIST: "/api/MilestoneMaster/allmilestonemaster",
  CREATE_MILESTONE_MASTER: "/api/MilestoneMaster/create_milestoneMaster",
  UPDATE_MILESTONE_MASTER: "/api/MilestoneMaster/update_milestoneMaster",
  DELETE_MILESTONE_MASTER: "/api/MilestoneMaster/delete_milestoneMaster_by_id",
  /** ProjectStatusMaster **/
  GET_PROJECT_STATUS_LIST: "/api/MilestoneMaster/project_status_master",
  /**TaskStatusMaster**/
  GET_TASK_STATUS_LIST: "/api/MilestoneMaster/task_status_master",

  /** Milestone **/
  CREATE_MILESTONE: "/api/MilestoneMaster/project/createMilestone",
  DELETE_MILESTONE: "/api/MilestoneMaster/project/DeleteMilestone",

   /*** MilestoneTask **/
  CREATE_MILESTONE_TASK: "/api/MilestoneMaster/createTaskMilestone",
  UPDATE_MILESTONE_TASK: "/api/MilestoneMaster/updateTaskMilestone",
  DELETE_MILESTONE_TASK: "/api/MilestoneMaster/deleteTaskMilestone",

  /*** My Team **/
  GET_MY_TEAM_MEMBER: "/api/User/userteams",
  GET_MY_TEAM_MEMBER_PROFILE: "/api/User/editorviewuserteam/id?id=",
  UPDATE_MY_TEAM_MEMBER_PROFILE: "/api/User/updateuserteam",
  GET_ALL_MEMBERS: "/api/User/registeredusers",

  /** SETTINGS */
  GET_ROLE_SETTING: "/api/Role/roleSetting",
  UPDATE_ROLE_SETTING: "/api/Role/updateRoleSetting",

  /*** MAIL SENT **/
  NO_BOARD_ACCESS_REQUEST: "/api/MailManagement/board-access-request",
  NEW_USER_ACCESS_REQUEST: "/api/MailManagement/access-request",

  /** TASK/TICKET MANAGEMENT */
  ADD_TICKET: "/api/Ticket/createTicket",
  UPDATE_TICKET: "/api/TicketManagement/update-ticket",
  SUGGESTED_MEMBERS: "/api/TicketManagement/suggested-members",
  CUSTOMER_SEARCH: "/api/TicketManagement/ticketcustomers?customersearch=",
  GET_TICKET_DETAILS: "/api/TicketManagement/ticket-details",
  UPDATE_TICKET_SALES_DATA: "/api/TicketManagement/add-update-ticket-detail",
  UPDATE_TICKET_COMMON_DATA: "/api/TicketManagement/add-update-common-data",
  GET_PACKAGE_TOOL_DETAILS: "/api/TicketManagement/package-tool-details",
  TICKET_FILE_UPLOAD: "/api/TicketManagement/single-file-upload",
  DELETE_TICKET_ATTACHMENT:
    "/api/TicketManagement/deleteticketattachmentdetail",
  FILE_DOWNLOAD: "/api/TicketManagement/filedownload",
  CUSTOMER_LATEST_ORDER_ID: "/api/TicketManagement/customerlatestorderid",
  UPDATE_CUSTOMER_ORDER_ID: "/api/TicketManagement/updatecustomerorderid",

  /** TOOL TICKET MANAGEMENT */
  UPDATE_TOOL_TICKET: "/api/TicketToolManagement/upserttoolticket",
  TOOL_FILE_UPLOAD: "/api/TicketToolManagement/attachments",
  MOVE_TICKET: "/api/TicketToolManagement/moveticket",
  GET_COMMENT_DETAILS: "/api/TicketToolManagement/ticketcommentdetails",
  ADD_UPDATE_COMMENT: "/api/TicketToolManagement/addupdatecomment",
  DELETE_COMMENT: "/api/TicketToolManagement/deletecommentdetails",
  DELETE_TOOL_ATTACHMENT:
    "/api/TicketToolManagement/deletetickettoolattachmentdetail",
  ADD_ASSIGNEE_STATUS: "/api/TicketToolManagement/addassigneestatus",
  DATA_DEPENDENCY_ADD: "/api/TicketToolManagement/addupdateteam",
  DATA_DEPENDENCY_STATUS: "/api/TicketToolManagement/addupdateteamstatus",

  /** NOTIFICATION */
  GET_RECENT_NOTIFICATION: "/api/TicketManagement/getnotification",
  UPDATE_NOTIFICATION: "/api/TicketManagement/updatenotification",
  GET_PUSH_NOTIFICATION: "/api/TicketManagement/getpushnotification",
  GET_PAGE_NOTIFICATION: "/api/TicketManagement/getpagenotification",

  /**INVENTORY & MATERIALS - SITES */
  GET_APPROVED_PROJECTS_BY_EMPLOYEE:
    "/api/Project/get-approved-projects-by-employee",

  GET_ENGINEER_MATERIALS_BY_PROJECT: "/api/Material/my-project/materials",
  GET_MATERIAL_STOCK_ALERTS: "/api/MaterialStockAlerts/my-project/alerts",
  GET_MATERIAL_STATUS_BY_PROJECT: "/api/MaterialStatus/", // append {projectId}

  // stockinward and stockoutward
  CREATE_STOCK_INWARD: "/api/Inventory/create-stock-inward",
  CREATE_STOCK_OUTWARD: "/api/Inventory/create-stock-outward",

  // GET APIs for project-wise stock fetching
  GET_STOCK_INWARD_BY_PROJECT: "/api/Inventory/get-stock-inward-by-project",
  GET_STOCK_OUTWARD_BY_PROJECT: "/api/Inventory/get-stock-outward-by-project",
};
