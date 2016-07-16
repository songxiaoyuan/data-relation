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
		# if i == 1:
		# 	print line
		# 	i = i+1
		# else :
		# 	continue
		strings = line.split(',')
		# print strings
		# print '\n'
		companyID = strings[0]
		buyCompany = strings[2]
		if  i ==61:
			print strings
		getStockWay = strings[6]

		print i
		print '\n'
		i = i+1
		print buyCompany
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
	#print companyData


