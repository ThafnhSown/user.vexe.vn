export const regexNumber = (num) => {
    
    const regex = /(\d)(?=(\d{3})+(?!\d))/g;
    const res = num.toString().replace(regex, '$1.');
    return res
}

export const locale = {
    "lang": {
        "locale": "vi_VN",
        "placeholder": "Select date",
        "rangePlaceholder": ["Start date", "End date"],
        "today": "Hôm nay",
        "now": "Bây giờ",
        "backToToday": "Back to today",
        "ok": "OK",
        "clear": "Clear",
        "month": "Tháng",
        "year": "Năm",
        "timeSelect": "Select time",
        "dateSelect": "Chọn ngày đi",
        "monthSelect": "Choose a month",
        "yearSelect": "Choose a year",
        "decadeSelect": "Choose a decade",
        "yearFormat": "YYYY",
        "dateFormat": "M/D/YYYY",
        "dayFormat": "D",
        "dateTimeFormat": "M/D/YYYY HH:mm:ss",
        "monthFormat": "MMMM",
        "monthBeforeYear": true,
        "previousMonth": "Previous month (PageUp)",
        "nextMonth": "Next month (PageDown)",
        "previousYear": "Last year (Control + left)",
        "nextYear": "Next year (Control + right)",
        "previousDecade": "Last decade",
        "nextDecade": "Next decade",
        "previousCentury": "Last century",
        "nextCentury": "Next century",
        "shortWeekDays": ["CN", "T2", "T3", "T4", "T5", "T6", "T7"],
        "shortMonths": [
            "Th 1",
            "Th 2",
            "Th 3",
            "Th 4",
            "Th 5",
            "Th 6",
            "Th 7",
            "Th 8",
            "Th 9",
            "Th 10",
            "Th 11",
            "Th 12"
          ]
      },
      "timePickerLocale": {
        "placeholder": "Select time"
      },
      "dateFormat": "YYYY-MM-DD",
      "dateTimeFormat": "YYYY-MM-DD HH:mm:ss",
      "weekFormat": "YYYY-wo",
      "monthFormat": "YYYY-MM"
}