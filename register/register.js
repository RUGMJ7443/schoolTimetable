$('form').jsonForm({
    schema: {
        name: {
            title: "Full Name",
            description: "Your fullname e.g(John Smith)",
            type: 'string',
            required: true
        },
        email: {
            title: "Email Address",
            description: "Your E-Mail Address e.g(johnsmith@example.com) <small><strong>Your email will not be shared and is only used for sending your account information and maintenance</strong></small>",
            type: 'email',
            required: true,

        },
        week1: {
            type: 'object',
            required: true,
            title: "Week1",
            properties: {
                monday: {
                    title: "Monday",
                    type: 'object',
                    required: true,
                    properties: {
                        1: {
                            title: "<h4>First Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        2: {
                            title: "<h4>Second Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        3: {
                            title: "<h4>Third Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        4: {
                            title: "<h4>Fourth Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        5: {
                            title: "<h4>Fifth Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        items: {
                            type: "array",
                            title: "Items",
                            items: {
                                type: "object",
                                title: "Item",
                                properties: {
                                    need: {
                                        type: "boolean",
                                        title: "Need"
                                    },
                                    name: {
                                        type: "string",
                                        title: "Name",
                                        required: true
                                    }
                                }
                            }
                        }

                    }
                },
                tuesday: {
                    title: "Tuesday",
                    type: 'object',
                    required: true,
                    properties: {
                        1: {
                            title: "<h4>First Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        2: {
                            title: "<h4>Second Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        3: {
                            title: "<h4>Third Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        4: {
                            title: "<h4>Fourth Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        5: {
                            title: "<h4>Fifth Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        items: {
                            type: "array",
                            title: "Items",
                            items: {
                                type: "object",
                                title: "Item",
                                properties: {
                                    need: {
                                        type: "boolean",
                                        title: "Need"
                                    },
                                    name: {
                                        type: "string",
                                        title: "Name",
                                        required: true
                                    }
                                }
                            }
                        }

                    }
                },
                wednesday: {
                    title: "Wednesday",
                    type: 'object',
                    required: true,
                    properties: {
                        1: {
                            title: "<h4>First Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        2: {
                            title: "<h4>Second Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        3: {
                            title: "<h4>Third Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        4: {
                            title: "<h4>Fourth Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        5: {
                            title: "<h4>Fifth Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        items: {
                            type: "array",
                            title: "Items",
                            items: {
                                type: "object",
                                title: "Item",
                                properties: {
                                    need: {
                                        type: "boolean",
                                        title: "Need"
                                    },
                                    name: {
                                        type: "string",
                                        title: "Name",
                                        required: true
                                    }
                                }
                            }
                        }

                    }
                },
                thursday: {
                    title: "Thursday",
                    type: 'object',
                    required: true,
                    properties: {
                        1: {
                            title: "<h4>First Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        2: {
                            title: "<h4>Second Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        3: {
                            title: "<h4>Third Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        4: {
                            title: "<h4>Fourth Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        5: {
                            title: "<h4>Fifth Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        items: {
                            type: "array",
                            title: "Items",
                            items: {
                                type: "object",
                                title: "Item",
                                properties: {
                                    need: {
                                        type: "boolean",
                                        title: "Need"
                                    },
                                    name: {
                                        type: "string",
                                        title: "Name",
                                        required: true
                                    }
                                }
                            }
                        }

                    }
                },
                friday: {
                    title: "Friday",
                    type: 'object',
                    required: true,
                    properties: {
                        1: {
                            title: "<h4>First Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        2: {
                            title: "<h4>Second Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        3: {
                            title: "<h4>Third Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        4: {
                            title: "<h4>Fourth Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        5: {
                            title: "<h4>Fifth Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        items: {
                            type: "array",
                            title: "Items",
                            items: {
                                type: "object",
                                title: "Item",
                                properties: {
                                    need: {
                                        type: "boolean",
                                        title: "Need"
                                    },
                                    name: {
                                        type: "string",
                                        title: "Name",
                                        required: true
                                    }
                                }
                            }
                        }
                    }
                }
            }


        },
        week2: {
            type: 'object',
            required: true,
            title: "Week2",
            properties: {
                monday: {
                    title: "Monday",
                    type: 'object',
                    required: true,
                    properties: {
                        1: {
                            title: "<h4>First Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        2: {
                            title: "<h4>Second Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        3: {
                            title: "<h4>Third Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        4: {
                            title: "<h4>Fourth Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        5: {
                            title: "<h4>Fifth Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        items: {
                            type: "array",
                            title: "Items",
                            items: {
                                type: "object",
                                title: "Item",
                                properties: {
                                    need: {
                                        type: "boolean",
                                        title: "Need"
                                    },
                                    name: {
                                        type: "string",
                                        title: "Name",
                                        required: true
                                    }
                                }
                            }
                        }

                    }
                },
                tuesday: {
                    title: "Tuesday",
                    type: 'object',
                    required: true,
                    properties: {
                        1: {
                            title: "<h4>First Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        2: {
                            title: "<h4>Second Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        3: {
                            title: "<h4>Third Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        4: {
                            title: "<h4>Fourth Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        5: {
                            title: "<h4>Fifth Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        items: {
                            type: "array",
                            title: "Items",
                            items: {
                                type: "object",
                                title: "Item",
                                properties: {
                                    need: {
                                        type: "boolean",
                                        title: "Need"
                                    },
                                    name: {
                                        type: "string",
                                        title: "Name",
                                        required: true
                                    }
                                }
                            }
                        }

                    }
                },
                wednesday: {
                    title: "Wednesday",
                    type: 'object',
                    required: true,
                    properties: {
                        1: {
                            title: "<h4>First Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        2: {
                            title: "<h4>Second Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        3: {
                            title: "<h4>Third Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        4: {
                            title: "<h4>Fourth Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        5: {
                            title: "<h4>Fifth Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        items: {
                            type: "array",
                            title: "Items",
                            items: {
                                type: "object",
                                title: "Item",
                                properties: {
                                    need: {
                                        type: "boolean",
                                        title: "Need"
                                    },
                                    name: {
                                        type: "string",
                                        title: "Name",
                                        required: true
                                    }
                                }
                            }
                        }

                    }
                },
                thursday: {
                    title: "Thursday",
                    type: 'object',
                    required: true,
                    properties: {
                        1: {
                            title: "<h4>First Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        2: {
                            title: "<h4>Second Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        3: {
                            title: "<h4>Third Peiriod</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        4: {
                            title: "<h4>Fourth Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        5: {
                            title: "<h4>Fifth Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        items: {
                            type: "array",
                            title: "Items",
                            items: {
                                type: "object",
                                title: "Item",
                                properties: {
                                    need: {
                                        type: "boolean",
                                        title: "Need"
                                    },
                                    name: {
                                        type: "string",
                                        title: "Name",
                                        required: true
                                    }
                                }
                            }
                        }

                    }
                },
                friday: {
                    title: "Friday",
                    type: 'object',
                    required: true,
                    properties: {
                        1: {
                            title: "<h4>First Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        2: {
                            title: "<h4>Second Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        3: {
                            title: "<h4>Third Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        4: {
                            title: "<h4>Fourth Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        5: {
                            title: "<h4>Fifth Period</h3>",
                            type: "object",
                            required: true,
                            properties: {
                                subject: {
                                    type: "string",
                                    title: "<h6>Subject</h6>",
                                    required: true
                                },
                                teacher: {
                                    type: "string",
                                    title: "<h6>Teacher</h6>",
                                    required: true
                                },
                                class: {
                                    type: "string",
                                    title: "<h6>Class</h6>",
                                    required: true
                                }
                            }
                        },
                        items: {
                            type: "array",
                            title: "Items",
                            items: {
                                type: "object",
                                title: "Item",
                                properties: {
                                    need: {
                                        type: "boolean",
                                        title: "Need"
                                    },
                                    name: {
                                        type: "string",
                                        title: "Name",
                                        required: true
                                    }
                                }
                            }
                        }
                    }
                }
            }


        }
    },
    //   form: [
    //     {
    //       key: "email",
    //       type: "email"
    //     }
    //   ],
    onSubmit: function (errors, values) {
        console.log(values)
        if (errors) {

            $('#res').html('<p>There was an error make sure you filled in everything correctly</p><p>For support contact Matthew Jones</p>');
        }
        else {
            $.ajax({
                dataType: 'json',
                type: 'post',
                contentType: 'application/json',
                url: `${getApiUrl()}/`,
                data: JSON.stringify(values, null, 2),
                success: function (data) {
                    $('#res').html(`
                    <p>Account Created! Your unique login id is ${data.id} do NOT share it with anyone!</p>
                    `);
                    document.querySelector('#res').scrollIntoView({
                        behavior: 'smooth'
                    })
                    setTimeout(() => {
                        location.href = "../login"
                    }, 500)
                },
                error: function (err) { console.log('There was a error'); console.error(err); }
            })

        }
    }
});