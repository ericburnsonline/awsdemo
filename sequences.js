var sequences = {

    "01 Demo (Ken) GD 5 Sample Findings": [
        {
            "routing_key": services["01 Demo (Ken) CloudWatch"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["01 Demo (Ken) CloudWatch"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["01 Demo (Ken) CloudWatch"],
            "payload": payloads["GuardDuty: DNS Data Exfiltration"],
            "delay": 0
        },
        {
            "routing_key": services["01 Demo (Ken) CloudWatch"],
            "payload": payloads["GuardDuty: GuardDuty Changes"],
            "delay": 0
        },
        {
            "routing_key": services["01 Demo (Ken) CloudWatch"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    "01 Demo (Ken) GD BitCoin Alerts": [
        {
            "routing_key": services["01 Demo (Ken) CloudWatch"],
            "payload": payloads["GuardDuty: Recon NetworkPermissions"],
            "delay": 3
        },
        {
            "routing_key": services["01 Demo (Ken) CloudWatch"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["01 Demo (Ken) CloudWatch"],
            "payload": payloads["GuardDuty: Turn Off Logging"],
            "delay": 2
        },
        {
            "routing_key": services["01 Demo (Ken) CloudWatch"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        }
    ],
    "01 Demo (Ken) Personal Health Daskboard": [
        {
            "routing_key": services["01 Demo (Ken) PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["01 Demo (Ken) New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["01 Demo (Ken) PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["01 Demo (Ken) PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }
    ],
    "01 Demo (Ken) CloudTrail Unsafe logins": [
        {
            "routing_key": services["01 Demo (Ken) CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA"],
            "delay": 1
        },
        {
            "routing_key": services["01 Demo (Ken) CloudTrail"],
            "payload": payloads["CloudTrail: Add User To Group"],
            "delay": 1
        }
    ],
    "01 Demo (Ken) CloudWatch JVM Restarts": [
        {
            "routing_key": services["01 Demo (Ken) CloudTrail"],
            "payload": payloads["CloudWatch: Elasticity Issue"],
            "delay": 1
        },
        {
            "routing_key": services["01 Demo (Ken) CloudTrail"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        }    ],

    "02 Demo (Eric) GD 5 Sample Findings": [
        {
            "routing_key": services["02 Demo (Eric) CloudWatch"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["02 Demo (Eric) CloudWatch"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["02 Demo (Eric) CloudWatch"],
            "payload": payloads["GuardDuty: DNS Data Exfiltration"],
            "delay": 0
        },
        {
            "routing_key": services["02 Demo (Eric) CloudWatch"],
            "payload": payloads["GuardDuty: GuardDuty Changes"],
            "delay": 0
        },
        {
            "routing_key": services["02 Demo (Eric) CloudWatch"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    "02 Demo (Eric) GD BitCoin Alerts": [
        {
            "routing_key": services["02 Demo (Eric) CloudWatch"],
            "payload": payloads["GuardDuty: Recon NetworkPermissions"],
            "delay": 3
        },
        {
            "routing_key": services["02 Demo (Eric) CloudWatch"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["02 Demo (Eric) CloudWatch"],
            "payload": payloads["GuardDuty: Turn Off Logging"],
            "delay": 2
        },
        {
            "routing_key": services["02 Demo (Eric) CloudWatch"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        }
    ],
    "02 Demo (Eric) Personal Health Daskboard": [
        {
            "routing_key": services["02 Demo (Eric) PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["02 Demo (Eric) New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["02 Demo (Eric) PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["02 Demo (Eric) PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }
    ],
    "02 Demo (Eric) CloudTrail Unsafe logins": [
        {
            "routing_key": services["02 Demo (Eric) CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA"],
            "delay": 1
        },
        {
            "routing_key": services["02 Demo (Eric) CloudTrail"],
            "payload": payloads["CloudTrail: Add User To Group"],
            "delay": 1
        }
    ],
    "02 Demo (Eric) CloudWatch JVM Restarts": [
        {
            "routing_key": services["02 Demo (Eric) CloudTrail"],
            "payload": payloads["CloudWatch: Elasticity Issue"],
            "delay": 1
        },
        {
            "routing_key": services["02 Demo (Eric) CloudTrail"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        }    ],

    "03 Demo (Masado) GD 5 Sample Findings": [
        {
            "routing_key": services["03 Demo (Masado) CloudWatch"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["03 Demo (Masado) CloudWatch"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["03 Demo (Masado) CloudWatch"],
            "payload": payloads["GuardDuty: DNS Data Exfiltration"],
            "delay": 0
        },
        {
            "routing_key": services["03 Demo (Masado) CloudWatch"],
            "payload": payloads["GuardDuty: GuardDuty Changes"],
            "delay": 0
        },
        {
            "routing_key": services["03 Demo (Masado) CloudWatch"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    "03 Demo (Masado) GD BitCoin Alerts": [
        {
            "routing_key": services["03 Demo (Masado) CloudWatch"],
            "payload": payloads["GuardDuty: Recon NetworkPermissions"],
            "delay": 3
        },
        {
            "routing_key": services["03 Demo (Masado) CloudWatch"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["03 Demo (Masado) CloudWatch"],
            "payload": payloads["GuardDuty: Turn Off Logging"],
            "delay": 2
        },
        {
            "routing_key": services["03 Demo (Masado) CloudWatch"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        }
    ],
    "03 Demo (Masado) Personal Health Daskboard": [
        {
            "routing_key": services["03 Demo (Masado) PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["03 Demo (Masado) New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["03 Demo (Masado) PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["03 Demo (Masado) PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }
    ],
    "03 Demo (Masado) CloudTrail Unsafe logins": [
        {
            "routing_key": services["03 Demo (Masado) CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA"],
            "delay": 1
        },
        {
            "routing_key": services["03 Demo (Masado) CloudTrail"],
            "payload": payloads["CloudTrail: Add User To Group"],
            "delay": 1
        }
    ],
    "03 Demo (Masado) CloudWatch JVM Restarts": [
        {
            "routing_key": services["03 Demo (Masado) CloudTrail"],
            "payload": payloads["CloudWatch: Elasticity Issue"],
            "delay": 1
        },
        {
            "routing_key": services["03 Demo (Masado) CloudTrail"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        }    ],

    "04 Demo (Edward) GD 5 Sample Findings": [
        {
            "routing_key": services["04 Demo (Edward) CloudWatch"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["04 Demo (Edward) CloudWatch"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["04 Demo (Edward) CloudWatch"],
            "payload": payloads["GuardDuty: DNS Data Exfiltration"],
            "delay": 0
        },
        {
            "routing_key": services["04 Demo (Edward) CloudWatch"],
            "payload": payloads["GuardDuty: GuardDuty Changes"],
            "delay": 0
        },
        {
            "routing_key": services["04 Demo (Edward) CloudWatch"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    "04 Demo (Edward) GD BitCoin Alerts": [
        {
            "routing_key": services["04 Demo (Edward) CloudWatch"],
            "payload": payloads["GuardDuty: Recon NetworkPermissions"],
            "delay": 3
        },
        {
            "routing_key": services["04 Demo (Edward) CloudWatch"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["04 Demo (Edward) CloudWatch"],
            "payload": payloads["GuardDuty: Turn Off Logging"],
            "delay": 2
        },
        {
            "routing_key": services["04 Demo (Edward) CloudWatch"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        }
    ],
    "04 Demo (Edward) Personal Health Daskboard": [
        {
            "routing_key": services["04 Demo (Edward) PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["04 Demo (Edward) New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["04 Demo (Edward) PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["04 Demo (Edward) PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }
    ],
    "04 Demo (Edward) CloudTrail Unsafe logins": [
        {
            "routing_key": services["04 Demo (Edward) CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA"],
            "delay": 1
        },
        {
            "routing_key": services["04 Demo (Edward) CloudTrail"],
            "payload": payloads["CloudTrail: Add User To Group"],
            "delay": 1
        }
    ],
    "04 Demo (Edward) CloudWatch JVM Restarts": [
        {
            "routing_key": services["04 Demo (Edward) CloudTrail"],
            "payload": payloads["CloudWatch: Elasticity Issue"],
            "delay": 1
        },
        {
            "routing_key": services["04 Demo (Edward) CloudTrail"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        }    ],

    "05 Demo (John) GD 5 Sample Findings": [
        {
            "routing_key": services["05 Demo (John) CloudWatch"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["05 Demo (John) CloudWatch"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["05 Demo (John) CloudWatch"],
            "payload": payloads["GuardDuty: DNS Data Exfiltration"],
            "delay": 0
        },
        {
            "routing_key": services["05 Demo (John) CloudWatch"],
            "payload": payloads["GuardDuty: GuardDuty Changes"],
            "delay": 0
        },
        {
            "routing_key": services["05 Demo (John) CloudWatch"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    "05 Demo (John) GD BitCoin Alerts": [
        {
            "routing_key": services["05 Demo (John) CloudWatch"],
            "payload": payloads["GuardDuty: Recon NetworkPermissions"],
            "delay": 3
        },
        {
            "routing_key": services["05 Demo (John) CloudWatch"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["05 Demo (John) CloudWatch"],
            "payload": payloads["GuardDuty: Turn Off Logging"],
            "delay": 2
        },
        {
            "routing_key": services["05 Demo (John) CloudWatch"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        }
    ],
    "05 Demo (John) Personal Health Daskboard": [
        {
            "routing_key": services["05 Demo (John) PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["05 Demo (John) New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["05 Demo (John) PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["05 Demo (John) PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }
    ],
    "05 Demo (John) CloudTrail Unsafe logins": [
        {
            "routing_key": services["05 Demo (John) CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA"],
            "delay": 1
        },
        {
            "routing_key": services["05 Demo (John) CloudTrail"],
            "payload": payloads["CloudTrail: Add User To Group"],
            "delay": 1
        }
    ],
    "05 Demo (John) CloudWatch JVM Restarts": [
        {
            "routing_key": services["05 Demo (John) CloudTrail"],
            "payload": payloads["CloudWatch: Elasticity Issue"],
            "delay": 1
        },
        {
            "routing_key": services["05 Demo (John) CloudTrail"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        }    ],

    "06 Demo (Cheryl) GD 5 Sample Findings": [
        {
            "routing_key": services["06 Demo (Cheryl) CloudWatch"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["06 Demo (Cheryl) CloudWatch"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["06 Demo (Cheryl) CloudWatch"],
            "payload": payloads["GuardDuty: DNS Data Exfiltration"],
            "delay": 0
        },
        {
            "routing_key": services["06 Demo (Cheryl) CloudWatch"],
            "payload": payloads["GuardDuty: GuardDuty Changes"],
            "delay": 0
        },
        {
            "routing_key": services["06 Demo (Cheryl) CloudWatch"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    "06 Demo (Cheryl) GD BitCoin Alerts": [
        {
            "routing_key": services["06 Demo (Cheryl) CloudWatch"],
            "payload": payloads["GuardDuty: Recon NetworkPermissions"],
            "delay": 3
        },
        {
            "routing_key": services["06 Demo (Cheryl) CloudWatch"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["06 Demo (Cheryl) CloudWatch"],
            "payload": payloads["GuardDuty: Turn Off Logging"],
            "delay": 2
        },
        {
            "routing_key": services["06 Demo (Cheryl) CloudWatch"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        }
    ],
    "06 Demo (Cheryl) Personal Health Daskboard": [
        {
            "routing_key": services["06 Demo (Cheryl) PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["06 Demo (Cheryl) New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["06 Demo (Cheryl) PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["06 Demo (Cheryl) PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }
    ],
    "06 Demo (Cheryl) CloudTrail Unsafe logins": [
        {
            "routing_key": services["06 Demo (Cheryl) CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA"],
            "delay": 1
        },
        {
            "routing_key": services["06 Demo (Cheryl) CloudTrail"],
            "payload": payloads["CloudTrail: Add User To Group"],
            "delay": 1
        }
    ],
    "06 Demo (Cheryl) CloudWatch JVM Restarts": [
        {
            "routing_key": services["06 Demo (Cheryl) CloudTrail"],
            "payload": payloads["CloudWatch: Elasticity Issue"],
            "delay": 1
        },
        {
            "routing_key": services["06 Demo (Cheryl) CloudTrail"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        }    ],

    "07 Demo (TBD) GD 5 Sample Findings": [
        {
            "routing_key": services["07 Demo (TBD) CloudWatch"],
            "payload": payloads["GuardDuty: RDP Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["07 Demo (TBD) CloudWatch"],
            "payload": payloads["GuardDuty: SSH Brute Force Attack"],
            "delay": 0
        },
        {
            "routing_key": services["07 Demo (TBD) CloudWatch"],
            "payload": payloads["GuardDuty: DNS Data Exfiltration"],
            "delay": 0
        },
        {
            "routing_key": services["07 Demo (TBD) CloudWatch"],
            "payload": payloads["GuardDuty: GuardDuty Changes"],
            "delay": 0
        },
        {
            "routing_key": services["07 Demo (TBD) CloudWatch"],
            "payload": payloads["GuardDuty: API's invoked"],
            "delay": 0
        }
    ],
    "07 Demo (TBD) GD BitCoin Alerts": [
        {
            "routing_key": services["07 Demo (TBD) CloudWatch"],
            "payload": payloads["GuardDuty: Recon NetworkPermissions"],
            "delay": 3
        },
        {
            "routing_key": services["07 Demo (TBD) CloudWatch"],
            "payload": payloads["GuardDuty: Unauthorized Access"],
            "delay": 2
        },
        {
            "routing_key": services["07 Demo (TBD) CloudWatch"],
            "payload": payloads["GuardDuty: Turn Off Logging"],
            "delay": 2
        },
        {
            "routing_key": services["07 Demo (TBD) CloudWatch"],
            "payload": payloads["GuardDuty: Bitcoin DNS"],
            "delay": 2
        }
    ],
    "07 Demo (TBD) Personal Health Daskboard": [
        {
            "routing_key": services["07 Demo (TBD) PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 1)"],
            "delay": 0
        },
        {
            "routing_key": services["07 Demo (TBD) New Relic"],
            "payload": payloads["New Relic: Response Time Increase"],
            "delay": 1
        },
        {
            "routing_key": services["07 Demo (TBD) PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (US West 2)"],
            "delay": 2
        },
        {
            "routing_key": services["07 Demo (TBD) PHD"],
            "payload": payloads["PHD: EC2 Store Drive Issue (AP SouthEast 2)"],
            "delay": 2
        }
    ],
    "07 Demo (TBD) CloudTrail Unsafe logins": [
        {
            "routing_key": services["07 Demo (TBD) CloudTrail"],
            "payload": payloads["CloudTrail: No 2FA"],
            "delay": 1
        },
        {
            "routing_key": services["07 Demo (TBD) CloudTrail"],
            "payload": payloads["CloudTrail: Add User To Group"],
            "delay": 1
        }
    ],
    "07 Demo (TBD) CloudWatch JVM Restarts": [
        {
            "routing_key": services["07 Demo (TBD) CloudTrail"],
            "payload": payloads["CloudWatch: Elasticity Issue"],
            "delay": 1
        },
        {
            "routing_key": services["07 Demo (TBD) CloudTrail"],
            "payload": payloads["CloudWatch: JVM Restart"],
            "delay": 1
        }    ],
};
