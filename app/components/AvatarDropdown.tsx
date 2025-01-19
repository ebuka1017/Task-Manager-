"use client";

import { useState } from "react";
import { Avatar, DropdownMenu, DropdownMenuItem, DropdownMenuTrigger, DropdownMenuContent, Dialog, DialogTrigger, DialogContent, DialogTitle, DialogDescription, Button } from "@/components/ui";

export default function AvatarDropdown() {
  const [showLogoutDialog, setShowLogoutDialog] = useState(false);

  const handleLogout = () => {
      // Logic for logout can go here
          console.log("User logged out");
	    };

  return (
      <div className="flex items-center justify-end">
            <DropdownMenu>
	            <DropdownMenuTrigger>
		              <Avatar
			                  src="/placeholder-user.jpg" // Default avatar
					              alt="User Avatar"
						                  className="cursor-pointer"
								            />
									            </DropdownMenuTrigger>
										            <DropdownMenuContent align="end" className="mt-2">
											              <DropdownMenuItem onClick={() => (window.location.href = "/profile")}>
												                  Profile
														            </DropdownMenuItem>
															              <DropdownMenuItem onClick={() => (window.location.href = "/settings")}>
																                  Settings
																		            </DropdownMenuItem>
																			              <DropdownMenuItem onClick={() => setShowLogoutDialog(true)}>
																				                  Logout
																						            </DropdownMenuItem>
																							            </DropdownMenuContent>
																								          </DropdownMenu>

      {/* Logout Confirmation Dialog */}
            <Dialog open={showLogoutDialog} onOpenChange={setShowLogoutDialog}>
	            <DialogContent>
		              <DialogTitle>Confirm Logout</DialogTitle>
			                <DialogDescription>
					            Are you sure you want to exit?
						              </DialogDescription>
							                <div className="flex justify-end gap-2 mt-4">
									            <Button variant="outline" onClick={() => setShowLogoutDialog(false)}>
										                  No
												              </Button>
													                  <Button
															                variant="primary"
																	              onClick={() => {
																		                      handleLogout();
																				                      setShowLogoutDialog(false);
																						                    }}
																								                >
																										              Yes
																											                  </Button>
																													            </div>
																														            </DialogContent>
																															          </Dialog>
																																      </div>
																																        );
																																	}