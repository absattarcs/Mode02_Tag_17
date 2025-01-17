// Defining the Permissions Enum
enum Permissions {
  None = 0,
  Read = 1,
  Write = 2,
  Execute = 4,
  Delete = 8
}

// Function to check included permissions
function checkPermissions(permission: Permissions): void {
  console.log(`Permissions for value ${permission}:`);
  if (permission & Permissions.Read) {
    console.log("- Read");
  }
  if (permission & Permissions.Write) {
    console.log("- Write");
  }
  if (permission & Permissions.Execute) {
    console.log("- Execute");
  }
  if (permission & Permissions.Delete) {
    console.log("- Delete");
  }
  if (permission === Permissions.None) {
    console.log("- None");
  }
}

// Testing the function with all possible values
checkPermissions(Permissions.None);
checkPermissions(Permissions.Read);
checkPermissions(Permissions.Write);
checkPermissions(Permissions.Execute);
checkPermissions(Permissions.Delete);
checkPermissions(Permissions.Read | Permissions.Write);
checkPermissions(Permissions.Execute | Permissions.Delete);
checkPermissions(Permissions.Read | Permissions.Write | Permissions.Execute | Permissions.Delete);