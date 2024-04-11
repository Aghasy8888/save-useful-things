export const getUserRole = (roleInfo: IRoleInfo) => {  
    if (roleInfo.is_owner) return 'ADMIN_OWNER';
    if (roleInfo.company_access) return 'ADMIN';
    if (roleInfo.devices_access) return 'MODERATOR';
    
    return 'USER';
  };