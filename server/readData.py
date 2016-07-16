#!/usr/bin/env python
# -*- coding:utf-8 -*-
import sys
reload(sys)
sys.setdefaultencoding("utf-8")

def getCompanyData():
	dataPath = "./data.csv"
	companyData = dict()
	csvFile = open(dataPath)
	i =1
	for line in csvFile:
		if i == 1:
			i = i+1
			continue
		strings = line.split(',')
		companyID = strings[0]
		buyCompany = strings[2]
		getStockWay = strings[6]
		# print i
		# print '\n'
		# i = i+1
		# if  i ==5:
		# 	break
		# print buyCompany
		if companyID not in companyData:
			companyData[companyID] = dict()
			companyData[companyID][getStockWay] = set()  #此处应该是一个集合。
			companyData[companyID][getStockWay].add(buyCompany)
		elif getStockWay not in companyData[companyID]:
			companyData[companyID][getStockWay] = set()
			companyData[companyID][getStockWay].add(buyCompany)
		else :
			companyData[companyID][getStockWay].add(buyCompany)
	return companyData

if __name__ == '__main__':
	companyData  = getCompanyData()
	tmp =  companyData["603188"]["支付现金"]
	for tmps in tmp:
		print tmps


